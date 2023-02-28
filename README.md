# Conceptos

NodeJS es un entorno de ejecución de JavaScript fuera del navegador. Se crea en 2009, orientado a servidores. Es muy importante que esté fuera del navegador debido a que ya no es necesario un navegador web para ejecutar código JavaScript.

## Características principales de JavaScript:
___

Concurrencia: *Es monohilo, con entradas y salidas asíncronas.*

Motor V8: *Creado por Google en 2008 para Chrome. Escrito en C++. Convierte JS en código máquina en lugar de interpretarlo en tiempo real.*

Todo funciona en base a Módulos, que son piezas de código muy pequeñas que modularizan nuestros sistemas y ayudan a entender mejor el código.

Orientación a Eventos, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la lógica de “Cuando sucede algo, se ejecuta esta parte de mi código y eso a su vez dispara otra parte”.

![](https://static.platzi.com/media/user_upload/node-455f3e25-b8e7-463b-81a0-f5b39f2e8113.jpg)


## Events
___

Event Queue: *Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.*

Event Loop: *Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.*

Thread Pool: *Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.*

Otra definición del Event Loop: *El Event Loop es la forma en que Node funciona, tiene principalmente un hilo llamado Event Queue, en este es donde se enfilan todas las acciones que se van a ejecutar.*
*Pero si por alguna razón a esta fila llega un evento que se demora como un setTimeout, una promesa o algo más, este tipo de eventos irán a parar a el Thread Pool, es un segundo hilo que se crea para resolver estos eventos con sus propios subs-hilos, una vez estos eventos son resolvidos se les manda de nuevo al Event Queue para que puedan ser ejecutados de manera correcta.*

![](https://i.ibb.co/j42621b/event-loop.png)

Dentro de node, una de las dependencias más importantes es **libuv** ya que es la que se encarga de gestionar los eventos en node.js.

Algunas de las funcionalidades de libuv son:
- Bucle de eventos con todas las funciones necesarias.
- Operaciones asincronas sobre archivos
- Eventos del sistema de archivos
- Grupo de hilos/procesos (Thread pool)

*Todas las funcionalidades [aqui](http://docs.libuv.org/en/v1.x/)*
![](https://static.platzi.com/media/user_upload/nodejs-arquitecture-3ddf57a4-0cc2-4606-8eae-5f978c217ecb.jpg)

**Monohilo:**

![](https://static.platzi.com/media/user_upload/Screen%20Shot%202021-08-12%20at%2014.30.03-86193eee-7e50-468f-a323-f59c0921bec5.jpg)


### Monitorear app

[Nodemon (Desarrollo)](https://nodemon.io/): Es un gestor que nos ayuda a detectar los cambios, compilarlo y ejecutarlos.

``` npm install -g nodemon ```


[PM2 (Producción)](https://pm2.keymetrics.io/): Es parecida a nodemon simplemente mas avanzada y mas compleja. No se debe utilizar en desarrollo por que dará más problemas que soluciones. Nos ayudara a ver los datos de nuestra aplicación en producción, como el uso del CPU, memoria, cuantas veces se ha reiniciado.

``` npm install -g pm2 ```

PM2 commands:

- Iniciar app = *pm2 start app.js*
- Parar app = *pm2 stop api*
- Parar todo = *pm2 stop all*
- Monitorear = *pm2 monit*
- Status = *pm2 status*
- Logs = *pm2 logs*

### Callbacks
___

Una funcion **callback** es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.

### File System
____

El **file system** provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.

Para ver más sobre la documentación de FileSystem:
[FileSystem Docs](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system)

### Consola
___
Con console podemos imprimir todo tipo de valores por
nuestra terminal.

- **console.log:** recibe cualquier tipo y lo muestra en el consola.
- **console.info:** es equivalente a log pero es usado para informar.
- **console.error:** es equivalente a log pero es usado para errores.
- **console.warn:** es equivalente a log pero es usado para warning.
- **console.table:** muestra una tabla a partir de un objeto.
- **console.count:** inicia un contador autoincremental.
- **console.countReset:** reinicia el contador a 0.
- **console.time:** inicia un cronometro en ms.
- **console.timeEnd:** Finaliza el cronometro.
- **console.group:** permite agrupar errores mediante identación.
- **console.groupEnd:** finaliza la agrupación.
- **console.clear:** Limpia la consola.


### Errores (Try / Catch)
___
Cuando se genera un error, *node* propaga el error hacia arriba, hasta que este es capturado. si el error no se captura *node* se detiene.

*Siempre que sea posible debemos capturar todos los errores que se puedan generar en nuestros hilos.*

```
const badFunction = () => 10 + a;
try{
    badFunction();
} catch(err){
    console.error('Se rompe nuestra función');
    console.error(err.message);
}
console.log('Continuan los procesos...')
```
Captura de errores en función asyncrona
```
function funcAsync() {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error(err);
      console.error("Ocurrio un error en la async");
    }
  });
}
```
### HTTP
___

Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.

En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.

Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.

### Estados de las peticiones
___

Hay distintos estados de las peticiones al servidor que se pueden ver de manera más amigable [aquí](https://http.cat/)

### Process
___

Podremos entender y ver qué pasa con el Process, podremos escuchar señales, escuchar lo que necesitemos y después hacer cosas con ellos.

Podemos hacer *require* para obtener **process**

`const process = require('process);`

Pero lo anterior no es necesario, ya que process es una variable global.

- **beforeExit** → Es para enviar algo antes que pare un proceso.
- **exit** → Es para matar un proceso.
- **uncaughtException** → Permite capturar cualquier error que no fue caputurado previamente.
- **uncaughtRejection** → Permite capturar cualquier error de promesas que se han rechazado.

### Buffers
___

Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.

Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en *bytes* y no se especifica el tipo de dato)

*En la consola, los datos se muestran en formato hexadecimal.*

**Creación buffer básico**

Para crear un buffer, con 4 espacios por ejemplo, podemos hacerlo con la siguiente sintaxis.
```
let buffer = Buffer.alloc(4);
console.log(buffer); 
// Output:
//<Buffer 00 00 00 00>
```
**Otro forma de crear un buffer**

Datos en un arreglo
```
let buffer = Buffer.from([1,2,3]);
console.log(buffer);
// Output:
// <Buffer 01 02 03>
```

**Datos tipo String**

```
let buffer = Buffer.from("Hola");
console.log(buffer);
console.log(buffer.toString());
// Ouput:
// <Buffer 48 6f 6c 61>
// Hola

```
**Podemos guardar el abecedario**
```
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}
console.log(abc.toString());
// Output:
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// abcdefghijklmnopqrstuvwxyz
```

### Streams
___

Un stream es el proceso de ir consumiendo datos al tiempo que se están recibiendo. En palabras del profesor, es el paso de datos entre un punto y otro.


**Diferencia entre un Buffer & un Stream**

*Un buffer es un montón de datos y un stream es un proceso donde pasan un montón de datos.*

![](https://tolustar.com/wp-content/uploads/2021/06/buffer-and-stream.png)

### Error First Callbacks
___

Un patrón que se sigue siempre en cualquier lenguaje y programa de devs es *Error First Callbacks*, esto quiere decir que siempre que tengamos un callback el primer parámetro debería ser el error.

`😭 Esto se usa por la convención de que todo puede fallar.`

Otro patrón típico es tener el callback como la última función que se pasa. Aunque depende del caso.