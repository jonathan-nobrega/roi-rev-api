/* eslint-disable @typescript-eslint/no-var-requires */

import { Request, Response } from "express";
const express = require('express')
const fs = require("fs");
const { parse } = require("csv-parse");

const port = 3000
const app = express();
const filepath = './uploads/csvFile.csv'

// app.use(express.urlencoded({extended: true}));

/**
 * Display list of the last 100 bids created
 */
app.post("/", async (req: Request, res: Response) => {
      try {
        fs.createReadStream(filepath)
          .pipe(parse({ delimiter: ",", from_line: 2 }))
          .on("data", function (row: any) {
            console.log(row);
          })
          .on("end", function () {
            console.log("eeeeeend");
          })
          .on("error", function (error: any) {
            console.log(error);
          });

        return res.send()
      } catch (err) {
        return res.status(400).send(err);
      }
    });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
