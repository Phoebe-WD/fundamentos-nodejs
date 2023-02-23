function otraFunction() {
  badFunction();
}
function badFunction() {
  return 3 + a;
}
function funcAsync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error(err);
      console.error("Ocurrio un error en la async");
      cb(err);
    }
  });
}
try {
  //   otraFunction();
  funcAsync((err) => {
    console.error(err.message);
  });
} catch (err) {
  console.error("se rompeee");
  console.error(err);
  console.log("Pero no ha pasado nada, ya que fue capturado");
}
console.log("fin del proceso");
