/* eslint-disable @typescript-eslint/no-var-requires */
import express, {Request, Response} from "express";
import * as bids from "../services/bids.service";
// const multer = require('multer');
// const upload = multer();

const port = 3000;
const app = express();

/**
 * Reads all Bids documents
 */
app.get("/", async (req: Request, res: Response) => {
  try {
    const readBids = await bids.readAll();
    return res.send(readBids);
  } catch (err) {
    return res.status(400).send(err);
  }
});

/**
 * Insert CSV rows into Firestore
 */
app.post("/", async (req: Request, res: Response) => {
  try {
    const createBids = await bids.create(req.body);
    return res.send(createBids);
  } catch (err) {
    return res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
