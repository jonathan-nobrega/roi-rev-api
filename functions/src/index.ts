import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const bids = functions.https.onRequest(async (request, response) => {
  functions.logger.info("api.cloudfunctions.net/bids invoked..");
  const handler = await require("./controllers/bids.controller");
  return handler(request, response);
});
