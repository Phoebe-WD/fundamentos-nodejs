function hello(name, miCallback) {
  setTimeout(function () {
    console.log(`Hola, ${name}`);
    miCallback();
  }, 1000);
}

function bye(name, otroCallback) {
  setTimeout(function () {
    console.log(`Adios, ${name}`), otroCallback();
  }, 1000);
}

console.log("Iniciando proceso...");
hello("Phoebe", function () {
  bye("Phoebe", function () {
    console.log("Terminando proceso...");
  });
});
