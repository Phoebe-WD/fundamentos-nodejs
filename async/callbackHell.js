function hello(name, miCallback) {
  setTimeout(function () {
    console.log(`Hola, ${name}`);
    miCallback(name);
  }, 1000);
}
function speak(callbackSpeak) {
  setTimeout(function () {
    console.log("bla bla bla");
    callbackSpeak();
  }, 1000);
}
function bye(name, otroCallback) {
  setTimeout(function () {
    console.log(`Adios, ${name}`), otroCallback();
  }, 1000);
}
function conversacion(name, veces, callback) {
  if (veces > 0) {
    speak(function () {
      conversacion(name, --veces, callback);
    });
  } else {
    bye(name, callback);
  }
}
console.log("Iniciando proceso...");
hello("Phoebe", function (name) {
  conversacion(name, 3, function () {
    console.log("proceso terminado");
  });
});
// hello("Phoebe", function () {
//   speak(function () {
//     speak(function () {
//       bye("Phoebe", function () {
//         console.log("Terminando proceso...");
//       });
//     });
//   });
// });
