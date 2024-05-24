"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Jobs from "../database/models/jobs.model";
import { handleError } from "../utils";

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

    const BulkJob = await Jobs.create(parsedData);
    revalidatePath(path);
    return JSON.parse(JSON.stringify(BulkJob));
  } catch (error) {
    handleError(error);
  }
}
