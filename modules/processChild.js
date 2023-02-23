const { exec, spawn } = require("child_process");

// exec("node modules/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }
//   console.log(stdout);
// });

// linux
// let procesoLinux = spawn("ls", ["-la"]);

// window
let proceso = spawn("cmd.exe", ["/c", "dir"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log("Esta muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("el proceso termino");
  console.log(proceso.killed);
});
