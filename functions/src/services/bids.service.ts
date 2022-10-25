/* eslint-disable @typescript-eslint/no-explicit-any */
import csv from "csv-parser";
import fs from "fs";
import { createBids } from "../models/bids.model";

/**
 * Creates a new bid into DB
 * @param {any} payload bid information
 * @return {any} Bid object
 */
export async function create(payload: any): Promise<any> {
  try {
    let list: any[] = [];
    const filepath = "./uploads/csvFile.csv";
    console.log(payload);

    await fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (data: any) => list.push(data))
      .on("end", async () => {
        console.log(list)
        await createBids(list)
      })
      .on("error", (error: any) => {
        throw error;
      });
    
    return list;
  } catch (err) {
    return err;
  }
}
