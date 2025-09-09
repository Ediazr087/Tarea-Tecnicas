//Tarea 1 Tenicas de programacion
//Integrantes:
//Elvis Diaz Ramirez.
//Victor Choez Arteaga.
//Isaac Martinez Vivanco.

//Ejercicio 1
//leer un número y mostrara si es positivo, negativo o neutro.
function Positivonoegativo(numero){
  //let numero= parseInt(prompt('Ingresa un número'));
    if(numero>0){
        console.log(`${numero} es positivo`);
    } else if (numero<0){
        console.log(`${numero} es negativo`);
    } else{
        console.log(`${numero} es neutro`)
    }
}
Positivonoegativo (-2)

//Ejercicio 1 Ciclo
//Leer una serie de números y mostrar cuales son positivos, negativos o neutro.
function Ciclopositivonoegativo(numero){
//let entrada = prompt("Ingresa una serie de números separados por comas:");
//let numeros = entrada.split(",").map(num => parseInt(num.trim()));
  let i=0;
  while(i<numero.length){
    console.log(numero[i])
    if(numero[i]>0){
        console.log(`${numero[i]} es positivo`);
    } else if (numero[i]<0){
        console.log(`${numero[i]} es negativo`);
    } else{
        console.log(`${numero[i]} es neutro`)
    }
    i++
  }
}
Ciclopositivonoegativo([0,-1,0,5,8])

//Ejercicio 1 Arreglo
// Dado un arreglo con N números, mostrar para cada uno si es positivo, negativo o neutro.
function  Arreglopositivonoegativo(numero){
//let entrada = prompt("Ingresa una serie de números separados por comas:");
//let numeros = entrada.split(",").map(num => parseInt(num.trim()));
  for(let i=0; i<numero.length; i++){
    console.log(numero[i]);
    if(numero[i]>0){
        console.log(`${numero[i]} es positivo`);
    } else if (numero[i]<0){
        console.log(`${numero[i]} es negativo`);
    } else{
        console.log(` ${numero[i]} es neutro`)
    }
  }
}
Arreglopositivonoegativo([-1,2,3,-5,6,-9,0])

//Ejercicio 2
//Leer cuántos lápices compra un cliente y calcular el costo.
function Costolapices(lapices){
//let Lapices= parseInt(prompt('Ingresa cuantos lapices necesitas'));
  console.log(lapices);
    costo1=0.85;
    costo2=0.90;
    if(lapices >= 1000){
        total1= lapices * costo1;
        console.log(`Total a pagar es ${total1}`);
    }else if(lapices < 1000){
        total2= lapices * costo2;
        console.log(`Total a Pagar es ${total2}`);
    }
}
Costolapices (1500)

//Ejercicio 2 Ciclo
//Leer la cantidad de lapices de N pedidos y calcular el costo total en cada caso.
function Ciclocostolapices(lapices){
//let Lapicesentrada= parseInt(prompt('Ingresa cuantos lapices necesitas'));
//let Lapices = Lapicesentrada.split(",").map(num => parseInt(num.trim()));
  console.log(lapices);
  let i= 0;
  while (i<lapices.length){
    costo1=0.85;
    costo2=0.90;
    if(lapices[i] >= 1000){
        total1= lapices[i] * costo1;
        console.log(`Total a pagar del pedido 1 es ${total1}`);
    }else if(lapices[i] < 1000){
        total2= lapices[i] * costo2;
        console.log(`Total a pagar del pedido 2 es ${total2}`);
    }
    i++
  }
}
Ciclocostolapices([1200,800])

//Ejercicio 2 Arreglo
//Dado un arreglo con la cantidad de lápices de varios pedidos, calcular el costo total de cada uno.
function Arreglocostolapices(lapices){
//let Lapicesentrada= parseInt(prompt('Ingresa cuantos lápices necesitas, separados por coma'));
//let Lapices = Lapicesentrada.split(",").map(num => parseInt(num.trim()));
  for(let i=0; i< lapices.length; i++){
    console.log(lapices[i]);
    costo1=0.85;
    costo2=0.90;
    if(lapices[i] >= 1000){
        total1= lapices[i] * costo1;
        console.log(`Total a pagar del pedido 6 es ${total1}`);
    }else if(lapices[i] < 1000){
        total2= lapices[i] * costo2;
        console.log(`Total a Pagar del pedido 9 es ${total2}`);
    }
  }
}
Arreglocostolapices([19000,983])

// Ejercicio 3
// Leer el precio de un traje y aplica un descuento.
function Descuentotraje(Traje){
//let Trajeentrada=parseInt(prompt('Ingresa el valor de tu Traje'));
  console.log(Traje);
    Descuento1=0.15;
    Descuento2=0.08;
    if(Traje >= 2500){
        Preciofinal= Traje - (Traje * Descuento1);
        console.log(`El total a pagar por el traje es ${Preciofinal}`);
    } else if (Traje <2500){
        Preciofinal= Traje - (Traje * Descuento2);
        console.log(`El total a pagar por el traje es ${Preciofinal}`);
    }
}
Descuentotraje (15600)

//Ejercicio 3 Ciclo
//Procesar el precio de N trajes y calcular el descuento de cada uno.
function Ciclodescuentotraje(traje){
//let Trajeentrada=parseInt(prompt('Ingresa el valor de tus Trajes, separados por coma'));
//let Traje= Trajeentrada.split(",").map(num => parseInt(num.trim()));
  let i= 0;
    Descuento1=0.15;
    Descuento2=0.08;
     while (i< traje.length){
    if(traje[i] >= 2500){
        Preciofinal= traje[i] - (traje[i] * Descuento1);
        console.log(`El total a pagar por el traje es ${Preciofinal}`);
    } else if (traje[i] <2500){
        Preciofinal= traje[i] - (traje[i] * Descuento2);
        console.log(`El total a pagar por el traje es ${Preciofinal}`);
    }
    i++
  }
}
Ciclodescuentotraje([2500,1500])

//Ejercicio 3 Arreglo
//Dado un arreglo con precios de N trajes, calcularel precio final aplicando el descuento correspondiente.
function Arreglodescuentotraje(Traje){
//let Trajeentrada=parseInt(prompt('Ingresa el valor de tus Trajes, separados por coma'));
//let Traje= Trajeentrada.split(",").map(num => parseInt(num.trim()));
  for(let i=0; i<Traje.length; i++ ){
  console.log(Traje[i]);
    Descuento1=0.15;
    Descuento2=0.08;
    if(Traje[i] >= 2500){
        Preciofinal= Traje[i] - (Traje[i] * Descuento1);
        console.log(`El total a pagar por el traje uno es ${Preciofinal}`);
    } else if (Traje[i] <2500){
        Preciofinal= Traje[i] - (Traje[i] * Descuento2);
        console.log(`El total a pagar por el traje dos es ${Preciofinal}`);
    }
  }
}
Arreglodescuentotraje([18000,1950])

// Ejercicio 4
//Leer tipo de autobús (A,B,C),distancia y cantidad de personas.
function Costodeviaje(Tipobus, Distancia, Personas){
//let costoentrada=parseInt(prompt('Ingresa los valores para esta operacion: Tipobus,Distancia,Personas'));
//let Costodeviaje= costoentrada.split(",").map(num => parseInt(num.trim()));
  let costokmpersona;
  if (Tipobus === 'A') {
    costokmpersona = 2;
  } else if (Tipobus === 'B') {
    costokmpersona = 3;
  } else if (Tipobus === 'C') {
    costokmpersona = 2.5;
  } else {
    console.log('Tipo de bus no disponible');
    return;
  }
  let NumPersonas;
  if (Personas < 20) {
    NumPersonas = 20;
  } else {
    NumPersonas = Personas;
  }
  let Costototal = NumPersonas * Distancia * costokmpersona;
  let costokmpersonaFinal = Costototal / Personas;
  console.log('Costo total: ' + Costototal.toFixed(2) + ' - Costo por persona: ' + costokmpersonaFinal.toFixed(2));
}
Costodeviaje('C', 30, 15);

//Ejercicio 4 Ciclos
//Calcular el costo de N viajes, pidiendo datos de cada viaje.
function Ciclocostodeviaje(Tipobus, Distancia, Personas){
  let i=0;
    while (i<Tipobus.length && i<Distancia.length && i<Personas.length){
  let costokmpersona;
  if (Tipobus[i] === 'A') {
    costokmpersona = 2;
  } else if (Tipobus[i] === 'B') {
    costokmpersona = 3;
  } else if (Tipobus[i] === 'C') {
    costokmpersona = 2.5;
  } else {
    console.log('Tipo de bus no disponible');
    return;
  }
  let NumPersonas;
  if (Personas[i] < 20) {
    NumPersonas = 20;
  } else {
    NumPersonas = Personas[i];
  }
  let Costototal = NumPersonas * Distancia[i] * costokmpersona;
  let costokmpersonaFinal = Costototal / Personas[i];
  console.log('Costo total: ' + Costototal.toFixed(2) + ' - Costo por persona: ' + costokmpersonaFinal.toFixed(2));
  i++
 }
}
Ciclocostodeviaje(['A', 'B'], [25, 30], [11, 22])

//Ejercicio 4 Arreglos
//Qué hacer: Guardar en un arreglo los viajes (tipo autobús, km, personas) y calcular el costo total y por persona de cada viaje.
function Arreglocostodeviaje(Tipobus, Distancia, Personas){
    let costoTotalGeneral = 0;
    let totalPersonasGeneral = 0;
    for (let i = 0; i < Tipobus.length && i < Distancia.length && i < Personas.length; i++) {
        let costokmpersona;
        if (Tipobus[i] === 'A') {
            costokmpersona = 2;
        } else if (Tipobus[i] === 'B') {
            costokmpersona = 3;
        } else if (Tipobus[i] === 'C') {
            costokmpersona = 2.5;
        } else {
            console.log('Tipo de bus no disponible');
            return;
        }
        let NumPersonas;
        if (Personas[i] < 20) {
            NumPersonas = 20;
        } else {
            NumPersonas = Personas[i];
        }
        let Costototal = NumPersonas * Distancia[i] * costokmpersona;
        let costokmpersonafinal = Costototal / Personas[i];
        console.log(`Viaje ${i + 1}: Costo total: $${Costototal.toFixed(2)} - Costo por persona: $${costokmpersonafinal.toFixed(2)}`);
  }
}
Arreglocostodeviaje(['A', 'C'], [100, 50], [15, 30])
//Ejercicio 5
//Leer el número de la cita y calcular su costo y el acumulado.
function CostoCita(numeroCita) {
//let Citaentrada= parseInt(prompt('Ingresa el numero de cita para conocer los valores a pagar y su acumulado'));
//let CostoCita= Citaentrada.split(",").map(num => parseInt(num.trim()));
    let costoTotal = 0;
    let costoCitaActual = 0;
    const costoTramo1 = 3 * 200;
    const costoTramo2 = 2 * 150;
    const costoTramo3 = 3 * 100;
    if (numeroCita >= 1 && numeroCita <= 3) {
        costoTotal = numeroCita * 200;
        costoCitaActual = 200;
    } else if (numeroCita >= 4 && numeroCita <= 5) {
        costoTotal = costoTramo1 + ((numeroCita - 3) * 150);
        costoCitaActual = 150;
    } else if (numeroCita >= 6 && numeroCita <= 8) {
        costoTotal = costoTramo1 + costoTramo2 + ((numeroCita - 5) * 100);
        costoCitaActual = 100;
    } else { // Cita 9 en adelante
        costoTotal = costoTramo1 + costoTramo2 + costoTramo3 + ((numeroCita - 8) * 50);
        costoCitaActual = 50;
    }
    console.log(`Costo cita ${numeroCita}: $${costoCitaActual} - Acumulado: $${costoTotal}`);
  }
CostoCita(4)

//Ejercicio 5 Ciclos
//Procesar el costo de la cita y acumulado para N pacientes, según el número de cita de cada uno.
function CiclocostoCita(numeroCita) {
    let costoTotal = 0;
    let costoCitaActual = 0;
    const costoTramo1 = 3 * 200;
    const costoTramo2 = 2 * 150;
    const costoTramo3 = 3 * 100;
    let i=0;
    while (i < numeroCita.length) {
    if (numeroCita[i] >= 1 && numeroCita[i] <= 3) {
        costoTotal = numeroCita[i] * 200;
        costoCitaActual = 200;
    } else if (numeroCita[i] >= 4 && numeroCita[i] <= 5) {
        costoTotal = costoTramo1 + ((numeroCita[i] - 3) * 150);
        costoCitaActual = 150;
    } else if (numeroCita[i] >= 6 && numeroCita[i] <= 8) {
        costoTotal = costoTramo1 + costoTramo2 + ((numeroCita[i] - 5) * 100);
        costoCitaActual = 100;
    } else {
        costoTotal = costoTramo1 + costoTramo2 + costoTramo3 + ((numeroCita[i] - 8) * 50);
        costoCitaActual = 50;
    }
    console.log(`Costo cita ${numeroCita[i]}: $${costoCitaActual} - Acumulado: $${costoTotal}`);
    i++;
    }
  }
CiclocostoCita([3,5])

//Ejercicio 5 Arreglos
//Guardar en un arreglo los números de cita de varios pacientes y calcular el costo y acumulado de cada una.
function ArreglocostoCita(numeroCita) {
    let costoTotal = 0;
    let costoCitaActual = 0;
    const costoTramo1 = 3 * 200;
    const costoTramo2 = 2 * 150;
    const costoTramo3 = 3 * 100;
    for(let i=0; i<numeroCita.length;i++){
    if (numeroCita[i] >= 1 && numeroCita[i] <= 3) {
        costoTotal = numeroCita[i] * 200;
        costoCitaActual = 200;
    } else if (numeroCita[i] >= 4 && numeroCita[i] <= 5) {
        costoTotal = costoTramo1 + ((numeroCita[i] - 3) * 150);
        costoCitaActual = 150;
    } else if (numeroCita[i] >= 6 && numeroCita[i] <= 8) {
        costoTotal = costoTramo1 + costoTramo2 + ((numeroCita[i] - 5) * 100);
        costoCitaActual = 100;
    } else {
        costoTotal = costoTramo1 + costoTramo2 + costoTramo3 + ((numeroCita[i] - 8) * 50);
        costoCitaActual = 50;
    }
    console.log(`Costo cita ${numeroCita[i]}: $${costoCitaActual} - Acumulado: $${costoTotal}`);
  }
}
ArreglocostoCita([1,4,5])

// Ejercicio 6
// Calcula el costo de producción y el precio de venta según clave (1–6).
//let Precioentrada= parseInt(prompt('Ingresa lso datos de clave y materia prima para hacer el calculo correspondiente'));
//let CalcularPrecioVenta= Precioentrada.split(",").map(num => parseInt(num.trim()));
function calcularPrecioVenta(clave, materiaPrima) {
    let manoObra = 0;
    let gastosFabricacion = 0;
    switch (clave) {
        case 1:
        case 2:
            manoObra = materiaPrima * 0.80;
            gastosFabricacion = materiaPrima * 0.28;
            break;
        case 3:
        case 4:
            manoObra = materiaPrima * 0.75;
            gastosFabricacion = materiaPrima * 0.35;
            break;
        case 5:
        case 6:
            manoObra = materiaPrima * 0.70;
            gastosFabricacion = materiaPrima * 0.30;
            break;
        default:
            console.log("Clave inválida.");
            return;
    }
    const costoProduccion = materiaPrima + manoObra + gastosFabricacion;
    const precioVenta = costoProduccion * 1.45;
    console.log(`Clave ${clave} | MateriaPrima: $${materiaPrima} | CostoProduccion: $${costoProduccion} | PrecioVenta: $${precioVenta.toFixed(2)}`);
}
calcularPrecioVenta(3,1400)

//Ejercicio 6 Ciclos
//Procesar N artículos y calcular precio de venta para cada uno.
function CiclocalcularPrecioVenta(clave, materiaPrima){
    let manoObra = 0;
    let gastosFabricacion = 0;
    let i= 0;
    while(i<clave.length && i< materiaPrima.length){
    switch (clave[i]) {
        case 1:
        case 2:
            manoObra = materiaPrima[i] * 0.80;
            gastosFabricacion = materiaPrima[i] * 0.28;
            break;
        case 3:
        case 4:
            manoObra = materiaPrima[i]* 0.75;
            gastosFabricacion = materiaPrima[i] * 0.35;
            break;
        case 5:
        case 6:
            manoObra = materiaPrima[i] * 0.70;
            gastosFabricacion = materiaPrima[i] * 0.30;
            break;
        default:
            console.log("Clave inválida.");
            return;
    }
    const costoProduccion = materiaPrima[i] + manoObra + gastosFabricacion;
    const precioVenta = costoProduccion * 1.45;
    console.log(`Clave ${clave[i]}, MateriaPrima: $${materiaPrima[i]}, PrecioVenta: $${precioVenta.toFixed(2)}`);
    i++
  }
}
CiclocalcularPrecioVenta([5,2],[3000,2500])

//Ejercicio 6 Arreglos
//Dado un arreglo con tuplas (clave, materia prima), calcular el precio de venta de cada artículo.
function ArreglocalcularPrecioVenta(clave, materiaPrima){
    let manoObra = 0;
    let gastosFabricacion = 0;
    for(let i=0; i<clave.length && i< materiaPrima.length; i++){
    switch (clave[i]) {
        case 1:
        case 2:
            manoObra = materiaPrima[i] * 0.80;
            gastosFabricacion = materiaPrima[i] * 0.28;
            break;
        case 3:
        case 4:
            manoObra = materiaPrima[i]* 0.75;
            gastosFabricacion = materiaPrima[i] * 0.35;
            break;
        case 5:
        case 6:
            manoObra = materiaPrima[i] * 0.70;
            gastosFabricacion = materiaPrima[i] * 0.30;
            break;
        default:
            console.log("Clave inválida.");
            return;
    }
    const costoProduccion = materiaPrima[i] + manoObra + gastosFabricacion;
    const precioVenta = costoProduccion * 1.45;
    console.log(`Clave ${clave[i]}  MateriaPrima: $${materiaPrima[i]}  PrecioVenta: $${precioVenta.toFixed(2)}`);
  }
}
ArreglocalcularPrecioVenta([1,4,6],[1000,1500,2020])

// Ejercicio 7
//Leer tipo de tarjeta y calcular el nuevo límite de crédito.
//let Creditoentrada= parseInt(prompt('Ingresa los datos del prestamo y su tipo de tarjeta para acceder al credito'));
//let Creditos= Creditoentrada.split(",").map(num => parseInt(num.trim()));
function Creditos(prestamo, Tipo){
    let porcentaje;
    if (Tipo === 1) {
        porcentaje = 25;
    } else if (Tipo === 2) {
        porcentaje = 35;
    } else if (Tipo === 3) {
        porcentaje = 40;
    } else {
        porcentaje = 50;
    }
    let interes = prestamo * porcentaje / 100;
    let nuevoCredito = prestamo + interes;
    console.log(`Tipo de tarjeta ${Tipo}. Nuevo de crédito: $${nuevoCredito}`);
}
Creditos(2500, 2);

//Ejercicio 7 Ciclos
//Leer datos de N clientes (tipo de tarjeta y crédito actual) y mostrar su nuevo límite.
function Cicloscreditos(prestamo, Tipo){
  let i=0;
  while (i< prestamo.length && i< Tipo.length){
    let porcentaje=0;
    if (Tipo[i] === 1) {
        porcentaje = 25;
    } else if (Tipo[i] === 2) {
        porcentaje = 35;
    } else if (Tipo[i] === 3) {
        porcentaje = 40;
    } else {
        porcentaje = 50;
    }
    let interes = prestamo[i] * porcentaje / 100;
    let nuevoCredito = prestamo[i] + interes;
    console.log(`Tipo de tarjeta ${Tipo[i]}. Credito actual ${prestamo[i]}. Nuevo de crédito: $${nuevoCredito}`);
    i++
  }
}
Cicloscreditos([1500,2500],[2,1])

//Ejercicio 7 Arreglos
//Dado un arreglo con tuplas (tipo tarjeta, crédito actual), calcular el nuevo límite de crédito de cada cliente.
function Arreglocreditos(prestamo, Tipo, Cliente){
    let porcentaje=0;
    for(let i= 0; i< prestamo.length && i< Tipo.length; i++){
    if (Tipo[i] === 1) {
        porcentaje = 25;
    } else if (Tipo[i] === 2) {
        porcentaje = 35;
    } else if (Tipo[i] === 3) {
        porcentaje = 40;
    } else {
        porcentaje = 50;
    }
    let interes = prestamo[i] * porcentaje / 100;
    let nuevoCredito = prestamo[i] + interes;
    console.log(`${Cliente[i]}, Tipo de tarjeta ${Tipo[i]}. Credito actual ${prestamo[i]}. Nuevo de crédito: $${nuevoCredito}`);
  }
 }
 Arreglocreditos([2800,1500,3000],[3,1,2],['Cliente 2','Cliente 3','Cliente 1'])

// Ejercicio 8
// Calcular costo según peso y zona.
//let Paqueteentrada= parseInt(prompt('Ingresa los datos de peso y zona para conocer el precio del envio'));
//let Paquete= Paqueteentrada.split(",").map(num => parseInt(num.trim()));
function Paquete(Peso,Zona){
  if(Peso<=5){
  }
  let Costoenvio;
  if(Zona==1){
    Zona1America=30.00;
    extras=5.00; 
    Costoenvio=Zona1America+(Peso-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else if(Zona==2){
    Zona2Europa=60.00;
    extras=10.00;
    Costoenvio=Zona2Europa+(Peso-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else if(Zona==3){
    Zona3Asia=90.00;
    extras=15.00;
    Costoenvio=Zona3Asia+(Peso-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else{
    console.log(`Zona no disponible`)
  }
}
Paquete(2,2)

//Ejercicio 8 Ciclos
// Calcular el costo de envío para N paquetes, validando que no excedan 5 kg.
function Ciclopaquete(Peso,Zona){
  let Costoenvio;
  let i=0;
  while(i<Peso.length && i<Zona.length){
  if(Peso[i]<=5){
  }
  if(Zona[i]==1){
    Zona1America=30.00;
    extras=5.00; 
    Costoenvio=Zona1America+(Peso[i]-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else if(Zona[i]==2){
    Zona2Europa=60.00;
    extras=10.00;  
    Costoenvio=Zona2Europa+(Peso[i]-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else if(Zona[i]==3){
    Zona3Asia=90.00;
    extras=15.00;
    Costoenvio=Zona3Asia+(Peso[i]-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else{
    console.log(`Zona no disponible`)
  }
  i++
 }
}
Ciclopaquete([1,2],[3,2])

//Ejercicio 8 Arreglos
//Dado un arreglo con tuplas (peso, zona), calcular el costo de envío de cada paquete, siempre que el peso ≤ 5 kg.
function Arreglopaquete(Peso,Zona){
  let Costoenvio;
  for(let i=0; i<Peso.length&& i<Zona.length; i++){
  if(Peso[i]<=5){
  }
  if(Zona[i]=='America'){
    Zona1America=30.00;
    extras=5.00; 
    Costoenvio=Zona1America+(Peso[i]-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else if(Zona[i]=='Europa'){
    Zona2Europa=60.00;
    extras=10.00;
    Costoenvio=Zona2Europa+(Peso[i]-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else if(Zona[i]=='Asia'){
    Zona3Asia=90.00;
    extras=15.00;
    Costoenvio=Zona3Asia+(Peso[i]-1)*extras;
    console.log(`Costo del envio es ${Costoenvio}`);
  }else{
    console.log(`Zona no disponible`)
  }
 }
}
Arreglopaquete([2,2],['Asia','Europa'])

// Ejercicio 9
//Leer una edad y clasificar.
function Edades(Edad){
//let Edadentrada= parseInt(prompt('Ingresa tu edad para acceder a la clasificacíon'));
//let Edad= Edadentrada.split(",").map(num => parseInt(num.trim()));
  console.log(`La edad ingresada es ${Edad} años`)
  if(Edad>=1&&Edad<=3){
    console.log('Infante');
  }else if(Edad>=4&&Edad<13){
    console.log('Niño');
  }else if(Edad>=14&&Edad<17){
    console.log('Adolescente');
  }else if(Edad>=36&&Edad<64){
    console.log('Adulto');
  }else if(Edad>=65){
    console.log('Adulto Mayor')
  }
}

Edades(9)

//Ejercicio 9 Ciclos
//Leer edades de N personas y mostrar su categoría.
function Cicloedades(Edad){
  let i=0;
  while(i<Edad.length){
  console.log(`La edad ingresada es ${Edad[i]} años`)
  if(Edad[i] >=1 && Edad[i] <=3){
    console.log(`La edad ${Edad[i]} es de un Infante`);
  }else if(Edad[i]>= 4 && Edad[i]< 13){
    console.log(`La edad ${Edad[i]} es de un niño`);
  }else if(Edad[i]>= 14 && Edad[i]< 17){
    console.log(`La edad ${Edad[i]} es de un Adolescente`);
  }else if(Edad[i]>= 36 && Edad[i]< 64){
    console.log(`La edad ${Edad[i]} es de un Adulto`);
  }else if(Edad[i]>= 65){
    console.log(`La edad ${Edad[i]} es de un Adulto Mayor`)
  }
  i++
 }
}
Cicloedades([5,80,15,39,2,])

//Ejercicio 9 Arreglos
// Dado un arreglo con las edades de varias personas, mostrar su categoría (Infante, Niño, Adolescente, Joven, Adulto, Adulto mayor).
function Arregloedades(Edad){
  for(let i=0; i<Edad.length; i++){
  console.log(`La edad ingresada es ${Edad[i]} años `)
  if(Edad[i] >=1 && Edad[i] <=3){
    console.log(`La edad ${Edad[i]} es de un Infante`);
  }else if(Edad[i]>= 4 && Edad[i]< 13){
    console.log(`La edad ${Edad[i]} es de un niño`);
  }else if(Edad[i]>= 14 && Edad[i]< 17){
    console.log(`La edad ${Edad[i]} es de un Adolescente`);
  }else if(Edad[i]>= 36 && Edad[i]< 64){
    console.log(`La edad ${Edad[i]} es de un Adulto`);
  }else if(Edad[i]>= 65){
    console.log(`La edad ${Edad[i]} es de un Adulto Mayor`)
  }
 }
}
Arregloedades([1,9,14,36,65])

// Ejercicio 10 
//Leer un número y mostrar el día de la semana.
function Diasemana(numero){
//let numeroentrada= parseInt(prompt('Ingresa un número o una serie de números para ver el dia de la semana disponible.'));
//let numero= numeroentrada.split(",").map(num => parseInt(num.trim()));
  console.log(numero);
  if(numero===1){
    console.log('Lunes');
  }else if(numero===2){
    console.log('Martes');
  }else if(numero===3){
    console.log('Miercoles');
  }else if(numero===4){
    console.log('Jueves');
  }else if(numero===5){
    console.log('Viernes');
  }else{
    console.log('Es fin de semana');
  }
}
Diasemana(4);

//Ejercicio 10 Ciclos
//Leer N números y mostrar el día correspondiente para cada uno.
function Ciclodiasemana(numero){
  let i=0;
  while (i<numero.length){
    console.log(numero[i])
  if(numero[i]===1){
    console.log('Lunes');
  }else if(numero[i]===2){
    console.log('Martes');
  }else if(numero[i]===3){
    console.log('Miercoles');
  }else if(numero[i]===4){
    console.log('Jueves');
  }else if(numero[i]===5){
    console.log('Viernes');
  }else if(numero[i]===6){
    console.log('Sabado');
  }else if(numero[i]===7){
    console.log('Domingo');
  }else{
    console.log('ERROR');
  }
  i++
 }
}
Ciclodiasemana([1,2,3,4,5,6,7])

//Ejercicio 10 Arreglos
// Dado un arreglo con números (1–7), mostrar el día correspondiente de la semana.
function Arreglodiasemana(numero){
  for(let i=0; i<numero.length;i++){
  if(numero[i]===1){
    console.log('Lunes');
  }else if(numero[i]===2){
    console.log('Martes');
  }else if(numero[i]===3){
    console.log('Miercoles');
  }else if(numero[i]===4){
    console.log('Jueves');
  }else if(numero[i]===5){
    console.log('Viernes');
  }else if(numero[i]===6){
    console.log('Sabado');
  }else if(numero[i]===7){
    console.log('Domingo');
  }else{
    console.log('ERROR')
  }
 }
}
Arreglodiasemana([1,2,3,4,5,6,7,9])