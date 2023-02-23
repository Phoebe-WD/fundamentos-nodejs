const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("no he podido escribirlo");
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}
function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}
// leer(__dirname + "/bloc.txt", console.log);
// escribir(__dirname + "/bloc1.txt", "soy un archivo nuevo", console.log);
borrar(__dirname + "/bloc1.txt", console.log);
