<h1 align="center"> Challenge Curso Amigo Secreto </h1>

![amigo secreto](https://github.com/user-attachments/assets/41eafe6a-1baf-4f72-8b7b-a5e8d7312023)



## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: El usuario debera agregar un nombre en el campo en "Escribe un nombre"
- `Funcionalidad 1a`: El usuario debera hacer click en boton "Añadir" para que se visualice el mismo y participe del sorteo
- `Funcionalidad 1b`: Si no se completa el campo "Escribe un nombre" y se hace click en boton "Añadir" deberá aparecer un alerta indicando 
   que debe agregar datos
- `Funcionalidad 3`: Los nombres ingresados en la caja se visualizaran debajo del campo "Escribe un nombre"
- `Funcionalidad 4`: El usuario debera hacer click en boton "Sortear Amigo" y al hacerlo se visualizará el nombre que se sorteo 
   aleatoriamente.

Se crean las variables a tener en cuenta entre ellas un array que permita agregar los datos que agrega el usuario
```javascript
 let agregarAmigosALista = [];
 let listaDeAmigos = document.getElementById('listaAmigos');
 let sorteo = document.getElementById('resultado');
```

 Se crea la funcion AGREGAR AMIGO que permite almacenar los datos del usuario
```javascript
 function agregarAmigo () {
     //Permite almacenar los datos que se ingresan a la caja vacia
     let nombre = document.getElementById('amigo').value;
     console.log(nombre);
     //solicita un dato obligatorio
     if (nombre === '') {
         alert('Por favor, inserte un nombre.');
     } else{
         agregarAmigosALista.push(nombre);
     }
     //Actualizar el array de amigos
     actualizarLista();
     limpiarCaja();
     return;
 };
```


Tambien se limpiara la caja antes de agregar otro dato 
 ```javascript
 // Limpieza de caja
 function limpiarCaja(){
     document.getElementById('amigo').value = '';
 }
 ```


 Se crea la funcion ACTUALIZAR LISTA
```javascript
 function actualizarLista() {
     //actualiza la lista existente
     listaDeAmigos.innerHTML = '';
     //iterar sobre el arreglo
     for (var i = 1; i <= agregarAmigosALista.length; i++) {
         //Agregar elementos a la lista
         let nombreAgregado = document.createElement('li');
         nombreAgregado.textContent = ` ${agregarAmigosALista[i - 1]}`;
         listaDeAmigos.appendChild(nombreAgregado);
     }
 }
```

 
Se crea la funcion SORTEAR AMIGO, que permite entre todos los valores de la lista elegir aleatoriamente uno de los datos
```javascript
 function sortearAmigo() {
     //Validar la cantidad de datos ingresados en la caja
     if (agregarAmigosALista <= 1) {
         alert('No hay amigos suficientes en la lista para sortear');
     } else {
         //Generar un índice aleatorio
         let amigoSorteado = Math.floor(Math.random() * agregarAmigosALista.length);
         //Obtener el nombre sorteado y Mostrar el resultado
         sorteo.innerHTML = `El amigo ganador del sorteo es... ${agregarAmigosALista[amigoSorteado]} !!!!`;
     }
 }
```
