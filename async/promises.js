function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hola, ${name}`);
      resolve(name);
    }, 1000);
  });
}
function speak(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("bla bla bla");
      // resolve(name);
      reject("Hay un error");
    }, 1000);
  });
}
function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Adios, ${name}`), resolve();
    }, 1000);
  });
}

console.log("Iniciando proceso...");
hello("Phoebe")
  .then(speak)
  .then(speak)
  .then(speak)
  .then(bye)
  .then((name) => {
    console.log("Termino el proceso");
  })
  .catch((error) => console.error("ha habido un error", error));
