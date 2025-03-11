 //Crear un array para almacenar los nombres

 let agregarAmigosALista = [];
 let listaDeAmigos = document.getElementById('listaAmigos');
 let sorteo = document.getElementById('resultado');
 
 //Implementa una función para agregar amigos
 function agregarAmigo () {
     //Capturar el valor del campo de entrada
     let nombre = document.getElementById('amigo').value;
     console.log(nombre);
     //Validar la entrada
     if (nombre === '') {
         alert('Por favor, inserte un nombre.');
     } else{
         agregarAmigosALista.push(nombre);
     }
     //Actualizar el array de amigos
     actualizarLista();
     limpiarCaja();
     return;
 }
 
 // Limpieza de caja
 function limpiarCaja(){
     document.getElementById('amigo').value = '';
 }
 
 //Implementa una función para actualizar la lista de amigos
 function actualizarLista() {
     //Limpiar la lista existente
     listaDeAmigos.innerHTML = '';
     //iterar sobre el arreglo
     for (var i = 1; i <= agregarAmigosALista.length; i++) {
         //Agregar elementos a la lista
         let nombreAgregado = document.createElement('li');
         nombreAgregado.textContent = ` ${agregarAmigosALista[i - 1]}`;
         listaDeAmigos.appendChild(nombreAgregado);
     }
 }
 
//Implementa una función para sortear los amigos
 function sortearAmigo() {
     //Validar que haya amigos disponibles
     if (agregarAmigosALista <= 1) {
         alert('No hay amigos suficientes en la lista para sortear');
     } else {
         //Generar un índice aleatorio
         let amigoSorteado = Math.floor(Math.random() * agregarAmigosALista.length);
         //Obtener el nombre sorteado y Mostrar el resultado
         sorteo.innerHTML = `El amigo ganador del sorteo es... ${agregarAmigosALista[amigoSorteado]} !!!!`;
     }
 }
