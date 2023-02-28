console.time("todo");
let suma = 0;
console.time("bucle");
for (let i = 0; i < 10000; i++) {
  suma += 1;
}
console.timeEnd("bucle");
let suma2 = 0;
console.time("bucle2");
for (let j = 0; j < 100000000; j++) {
  suma2 += 1;
}
console.timeEnd("bucle2");
console.log("inicio proceso async");
console.time("asincrono");
asyncrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("todo");
function asyncrona() {
  return new Promise((res) => {
    setTimeout(function () {
      console.log("termino proceso async");
      res();
    });
  });
}
