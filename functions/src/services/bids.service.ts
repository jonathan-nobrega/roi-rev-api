/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = require("fs");
const csvParser = require("csv-parse");

/**
 * Creates a new bid into DB
 * @param {any} payload bid information
 * @return {any} Bid object
 */
export async function create(payload: any): Promise<any> {
  try {
    console.log(payload);

    const result: any = [];

    await fs.createReadStream(payload)
        .pipe(csvParser())
        .on("data", (data: any) => {
          console.log("on data");
          result.push(data);
        })
        .on("end", () => {
          console.log("on end");
          console.log(result);
        });

    console.log(result);

    return result;

    // const parsed = await fs.createReadStream(payload)
    //     .pipe(parse({delimiter: ",", from_line: 1}))
    //     .on("data", function(row: any) {
    //       console.log(row);
    //     })
    //     .on("end", function() {
    //       console.log("finished");
    //     })
    //     .on("error", function(error: any) {
    //       console.log(error.message);
    //     });

    // console.log(parsed);

    // return await parsed;
  } catch (err) {
    return err;
  }
}

// import { enc } from 'crypto-js';
// import AES from 'crypto-js/aes';

// export default class Crypto {
//   constructor() {
//     this.originalText = '';
//     this.encrypted = '';
//   }

//   encrypt(text) {
//     const ciphertext = AES.encrypt(text, process.env.NEXT_PUBLIC_PASS_PHRASE);
//     this.encrypted = encodeURIComponent(ciphertext.toString());
//     return this.encrypted;
//   }

//   decrypt(text) {
//     const decoded = decodeURIComponent(text);
//     const decrypted = AES.decrypt(decoded, process.env.NEXT_PUBLIC_PASS_PHRASE).toString(enc.Utf8);
//     this.originalText = JSON.parse(decrypted.toString());
//     return this.originalText;
//   }
// }
