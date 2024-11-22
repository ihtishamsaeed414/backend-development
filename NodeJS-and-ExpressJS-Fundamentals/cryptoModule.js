import crypto from "crypto";
// CreateHash provide crytpo gra[hic functionalities]
// const hash = crypto.createHash("sha256");
// hash.update("password1122");
// console.log(hash.digest("hex"));

// random keys for ids
// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString("hex"));
// });

// encrypting and decrypting data
// createCipheriv & createDecypheriv
const alogrithm = "aes-256-cbc"; //oneencryption alog
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// encryption
const cipher = crypto.createCipheriv(alogrithm, key, iv);
let encrypted = cipher.update("Hello, this si a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

// decryption
const decipher = crypto.createDecipheriv(alogrithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
