"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";
import { handleError } from "@/lib/utils";

import {
  CreateUserParams,
  DeleteUser,
  GetAllUsersParams,
  UpdateUser,
  UpdateUserParams,
} from "@/types/index";

const populateUser = (query: any) => {
  return query.populate({
    path: "_id",
  });
};

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create({ ...user, position: "User" });
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Unlink relationships
    await Promise.all([
      // Update the 'job' collection to remove references to the user
      //   Job.updateMany(
      //     { _id: { $in: userToDelete.job } },
      //     { $pull: { createdBy: userToDelete._id } }
      //   ),
      // Update the 'employer' collection to remove references to the user
      //   Employer.updateMany(
      //     { _id: { $in: userToDelete.job } },
      //     { $pull: { createdBy: userToDelete._id } }
      //   ),
    ]);

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

export async function getAllUsers({
  query,
  limit = 6,
  page,
}: GetAllUsersParams) {
  try {
    await connectToDatabase();

    const titleCondition = query
      ? {
          email: { $regex: query, $options: "i" },
        }
      : {};
    const conditions = {
      $and: [titleCondition],
    };

    const skipAmount = (Number(page) - 1) * limit;
    const userQuery = User.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const user = await populateUser(userQuery);
    const userCount = await User.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(user)),
      totalPages: Math.ceil(userCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updatesUser({ userId, user, path }: UpdateUser) {
  try {
    await connectToDatabase();

    // const eventToUpdate = await User.findById(user._id)
    // if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
    //   throw new Error('Unauthorized or event not found')
    // }

    const updatedEvent = await User.findByIdAndUpdate(
      user._id,
      { ...user },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedEvent));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteMyid({ userId, path }: DeleteUser) {
  try {
    await connectToDatabase();

    const deletedMyid = await User.findByIdAndDelete(userId);
    if (deletedMyid) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}
