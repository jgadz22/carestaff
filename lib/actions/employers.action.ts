"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Employer from "../database/models/employer.model";
import { handleError } from "../utils";
import {
  CreateEmployerParams,
  DeleteEmployerParams,
  UpdateEmployerParams,
} from "@/types";

const populate = (query: any) => {
  return query.populate({
    path: "_id",
  });
};

export async function createEmployerInfo({
  employerInfo,
  userId,
  path,
}: CreateEmployerParams) {
  try {
    await connectToDatabase();

    const creator = await Employer.findById(userId);

    if (!creator) {
      throw new Error("Creator not found");
    }

    const newEmployerDetails = await Employer.create({
      ...employerInfo,
      createdBy: userId,
    });
    revalidatePath(path);
    return JSON.parse(JSON.stringify(newEmployerDetails));
  } catch (error) {
    handleError(error);
  }
}

export async function getMyidById(employerId: string) {
  try {
    await connectToDatabase();

    const employer = await populate(Employer.findById(employerId));

    if (!employer) throw new Error("Employer not found");

    return JSON.parse(JSON.stringify(employer));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateEmployerInfo({
  userId,
  employerInfo,
  path,
}: UpdateEmployerParams) {
  try {
    await connectToDatabase();

    const employerToUpdate = await Employer.findById(employerInfo._id);
    if (!employerToUpdate) {
      throw new Error("Unauthorized or myid not found");
    }

    const updatedEmployer = await Employer.findByIdAndUpdate(
      employerInfo._id,
      { ...employerInfo },
      { new: true }
    );
    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedEmployer));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteMyid({ employerId, path }: DeleteEmployerParams) {
  try {
    await connectToDatabase();

    const deletedEmployer = await Employer.findByIdAndDelete(employerId);
    if (deletedEmployer) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}
