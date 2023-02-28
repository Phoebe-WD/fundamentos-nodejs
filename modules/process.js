process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});
process.on("exit", () => {
  console.log("El proceso terminó");
});

process.on("uncaughtException", (err, origen) => {
  console.log("se nor olvido capturar el error");
  console.error(err);
});

functioninexistente();
