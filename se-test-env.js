const crypto = require('crypto');
const fs = require('fs');



const privateKey = fs.readFileSync('C:\\Project\\certus\\saltedge_privatekey.pem', 'utf8');
const expires = Math.floor(Date.now() / 1000) + 300;
const signatureString = `${expires}|POST|https://www.saltedge.com/api/v6/customers|{"data":{"identifier":"mmu54589@gmail.com"}}`;
const signature = crypto
        .createSign('RSA-SHA256')
        .update(signatureString, 'utf8')
        .sign(privateKey, 'base64');
console.log('Generated RSA signature:', signature);
console.log('Expires at (unix timestamp):', expires);