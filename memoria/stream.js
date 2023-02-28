const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("UTF8");
// readableStream.on("data", function (chunk) {
//   data += chunk;
//   console.log(chunk);
// });

// readableStream.on("end", function () {
//   console.log(data);
//   console.log("termino de leer el archivo");
// });
// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

const Transform = stream.Transform;
/* ES6 */
class Mayus extends Transform {
  _transform(chunk, codif, cb) {
    const chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
  }
}
const mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);

/* VERSIÓN ANTIGUA */

// function Mayus() {
//   Transform.call(this);
// }
// util.inherits(Mayus, Transform);

// Mayus.prototype._transform = function (chunk, codif, cb) {
//   chunkMayus = chunk.toString().toUpperCase();
//   this.push(chunkMayus);
//   cb();
// };
// let mayus = new Mayus();

// readableStream.pipe(mayus).pipe(process.stdout);
