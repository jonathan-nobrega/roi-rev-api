/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

initializeApp();
const db = getFirestore();
let docRef = db.collection("bids");

/**
 * Read all records from Firestore DB
 * @return {any} Firestore response
 */
 export async function readBids() {
  let list: any[] = [];

  (await docRef.get()).forEach(doc => list.push(doc.data()))

  return list
}

// /**
//  * Read records by filter from Firestore DB
//  * @return {any} Firestore response
//  */
//  export async function filteredBids(filters: string[]) {
//   let list: any[] = [];

//   filters.forEach(filter => {
//     docRef = docRef
//   });

//   (await docRef.get()).forEach(doc => list.push(doc.data()))

//   return list
// }

/**
 * Create records on Firestore DB
 * @param {any} items Array of objects
 * @return {any} Firestore response
 */
export async function createBids(items: any) {
  return await items.map((item: any) => docRef.doc().set(item));
}
