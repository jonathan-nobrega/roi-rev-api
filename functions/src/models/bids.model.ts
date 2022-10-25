/* eslint-disable @typescript-eslint/no-explicit-any */
import {initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

initializeApp();

const db = getFirestore();

const docRef = db.collection("bids");

/**
 * Create records on Firestore DB
 * @param {any} items Array of objects
 * @return {any} Firestore response
 */
export async function createBids(items: any) {
  return await items.map((item: any) => docRef.doc().set(item));
}
