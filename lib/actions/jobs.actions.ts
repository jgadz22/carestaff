"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Jobs from "../database/models/jobs.model";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import {
  CreateJobParams,
  DeleteJobParams,
  GetAll,
  UpdateJobParams,
} from "@/types";

const populate = (query: any) => {
  return query.populate({
    path: "_id",
  });
};

export async function importBulkData({
  parsedData,
  userId,
  path,
}: {
  parsedData: any[];
  userId: string;
  path: string;
}) {
  try {
    await connectToDatabase();

    const creator = await User.findById(userId);

    if (!creator) {
      throw new Error("Creator not found");
    }

    const BulkJob = await Jobs.create(parsedData);
    revalidatePath(path);
    return JSON.parse(JSON.stringify(BulkJob));
  } catch (error) {
    handleError(error);
  }
}

export async function createJobDetails({
  jobDetails,
  userId,
  path,
}: CreateJobParams) {
  try {
    await connectToDatabase();

    const creator = await User.findById(userId);

    if (!creator) {
      throw new Error("Creator not found");
    }

    const newJobDetails = await Jobs.create({
      ...jobDetails,
      createdBy: userId,
    });
    revalidatePath(path);
    return JSON.parse(JSON.stringify(newJobDetails));
  } catch (error) {
    handleError(error);
  }
}

export async function getAllJobs({ query, limit = 10, page }: GetAll) {
  try {
    await connectToDatabase();

    const jobTypeCondition = query
      ? {
          jobType: { $regex: query, $options: "i" },
        }
      : {};
    const conditions = {
      $and: [jobTypeCondition],
    };
    const skipAmount = (Number(page) - 1) * limit;

    const sortCondition = { createdAt: "desc", _id: "asc" } as any;
    const usersQuery = Jobs.find(conditions)
      .sort(sortCondition)
      .skip(skipAmount)
      .limit(limit);

    const users = await populate(usersQuery);
    const usersCount = await Jobs.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(users)),
      totalPages: Math.ceil(usersCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
}

export async function getJobById(jobId: string) {
  try {
    await connectToDatabase();

    const job = await populate(Jobs.findById(jobId));

    if (!job) throw new Error("Job not found");

    return JSON.parse(JSON.stringify(job));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteJob({ jobId, path }: DeleteJobParams) {
  try {
    await connectToDatabase();

    const deletedjob = await Jobs.findByIdAndDelete(jobId);
    if (deletedjob) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

export async function updateJobDetails({
  userId,
  jobDetails,
  path,
}: UpdateJobParams) {
  try {
    await connectToDatabase();

    const jobToUpdate = await Jobs.findById(jobDetails._id);
    if (!jobToUpdate || !userId) {
      throw new Error("Unauthorized or Job not found");
    }

    const updatedMyid = await Jobs.findByIdAndUpdate(
      jobDetails._id,
      { ...jobDetails },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedMyid));
  } catch (error) {
    handleError(error);
  }
}
