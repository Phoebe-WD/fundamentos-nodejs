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

Todas las funcionalidades [aqui](http://docs.libuv.org/en/v1.x/)
![](https://static.platzi.com/media/user_upload/nodejs-arquitecture-3ddf57a4-0cc2-4606-8eae-5f978c217ecb.jpg)

Monohilo:

![](https://static.platzi.com/media/user_upload/Screen%20Shot%202021-08-12%20at%2014.30.03-86193eee-7e50-468f-a323-f59c0921bec5.jpg)


### Monitorear app
[Nodemon](https://nodemon.io/): para usar en desarrollo
[PM2](https://pm2.keymetrics.io/): Para usar en producción.