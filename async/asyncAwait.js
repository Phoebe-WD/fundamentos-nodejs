async function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${name}`);
      resolve(name);
    }, 1000);
  });
}
async function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("bla bla bla");
      resolve(name);
      //   reject("Hay un error");
    }, 1000);
  });
}
async function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${name}`), resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hello("Phoebe");
  await speak();
  await speak();
  await speak();
  await bye(nombre);
  console.log("Termina el proceso");
}
console.log("Inicia el proceso...");
main();
