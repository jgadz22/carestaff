"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Jobs from "../database/models/jobs.model";
import { handleError } from "../utils";
import User from "../database/models/user.model";

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
}: {
  jobDetails: any;
  userId: string;
  path: string;
}) {
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
