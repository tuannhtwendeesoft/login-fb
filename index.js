const { DateTime } = require("luxon");

// console.log(DateTime.fromISO("2025-10-13").startOf('day').diff(DateTime.fromISO("2025-11-09").startOf('day'), "days").days);



    // const start = DateTime.fromJSDate(new Date()).startOf('day');
    // const end = DateTime.fromJSDate(new Date('2026-10-13')).startOf('day');
    // console.log(start.toISO());
    // console.log(end.toISO());
    // console.log(end.diff(start, 'days').days);

const crypto = require('crypto');
const fs = require('fs');



const privateKey = fs.readFileSync('C:\\Project\\certus\\saltedge_privatekey-prod.pem', 'utf8');
const expires = Math.floor(Date.now() / 1000) + 300;
const signatureString = `${expires}|GET|https://www.saltedge.com/api/v6/transactions?connection_id=1662769386152270565|`;
const signature = crypto
        .createSign('RSA-SHA256')
        .update(signatureString, 'utf8')
        .sign(privateKey, 'base64');
console.log('Generated RSA signature:', signature);
console.log('Expires at (unix timestamp):', expires);