function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 1000);
}

asincrona(function (err, dato) {
  if (err) {
    console.error("tenemos un error");
    console.error(err);
    return false;
    // throw err; //EN UNA FUNCION ASYNC NO VA A FUNCIONAR
  }
  console.log("todo funcionó, mi dato es:", dato);
});
