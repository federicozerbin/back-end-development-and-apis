const fs = require('fs');
/*
fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
  console.log(data);
});

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nSecond line");

const exists = fs.existsSync("assets/output.txt");
console.log(exists); // true or false

const entries = fs.readdirSync("assets");
console.log(entries); // [ 'output.txt', 'poem.txt' ]

const buf = Buffer.from("Hello, Node!");
console.log(buf); // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString("hex")); // 48656c6c6f
console.log(buf.toString("base64")); // SGVsbG8=

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2); // <Buffer ab ab ab ab>

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded); 

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash); 

const crypto = require("crypto");
const random = crypto.randomBytes(16).toString("hex");
console.log(random); // e.g. 4f3a9c1b8e2d7a05

const crypto = require("crypto");
const id = crypto.randomUUID();
console.log(id); // e.g. 110e8400-e29b-41d4-a716-446655440000

const os = require("os");
console.log(os.platform() + "\n")
console.log(os.arch() + "\n")
console.log(os.hostname() + "\n")

console.log(os.totalmem() + "\n")
console.log(os.freemem() + "\n")
console.log(os.uptime() + "\n")

console.log(os.cpus().length);


const path = require("path");
const filePath = path.join(__dirname, "assets", "poem.txt");
console.log(filePath);

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));

const path = require("path");
const filePath = path.join(__dirname, "assets", "poem.txt");

console.log(path.join("assets", "..", "server.js")); // assets/../server.js → assets/../server.js (relative)
console.log(path.resolve("assets", "..", "server.js")); // /absolute/path/to/server.js

console.log(path.parse(filePath));


console.log(process.version)
console.log(process.platform)
console.log(process.env.NODE_ENV)

// run with: node server.js hello world
console.log(process.argv); // [ '/path/to/node', '/path/to/server.js', 'hello', 'world' ]
console.log(process.argv[2]); // 'hello'

process.stdout.write("Hello from stdout\n"); // newline only when you add \n
process.stderr.write("Hello from stderr\n");

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(chunk);
});

readable.on("end", () => {
  console.log("Done reading");
});


const writable = fs.createWriteStream("assets/stream-output.txt");
writable.write("First chunk\n");
writable.write("Second chunk\n");
writable.end();

*/

const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);