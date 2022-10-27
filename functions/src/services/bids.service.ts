/* eslint-disable @typescript-eslint/no-explicit-any */
import csv from "csv-parser";
import fs from "fs";
import jwt from "jsonwebtoken";
import { Bid } from "../interfaces/bids.interface";
import { createBids, readBids } from "../models/bids.model";

/**
 * Reads all bids
 * @return {any} Bid object
 */
export async function readAll(): Promise<any> {
  try {
    return await readBids();
  } catch (err) {
    return err;
  }
}

// /**
//  * Reads bids by filter
//  * @return {any} Bid object
//  */
//  export async function readFiltered(filters: string[]): Promise<any> {
//   try {
//     return await filteredBids(filters)
//   } catch (err) {
//     return err;
//   }
// }

/**
 * Creates a new bid into DB
 * @param {any} payload bid information
 * @return {any} Bid object
 */
export async function create(payload: any): Promise<any> {
  try {
    const list: any[] = [];
    const filepath = "./uploads/csvFile.csv";
    console.log(payload);

    await fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (data: Bid) => {
        // create an unique Id
        const id = jwt.sign(data, "RoiRules")

        // Work on solution to filter bids with the same id
        list.push({...data, id })
      })
      .on("end", async () => {
        await createBids(list);
      })
      .on("error", (error: any) => {
        throw error;
      });

    return list;
  } catch (err) {
    return err;
  }
}
