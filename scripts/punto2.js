/*2- Realizar un algoritmo que calcule el porcentaje de descuento que va a tener un
cliente dependiendo de los siguientes datos:
- Si el cliente compró un carro o una moto, el descuento será del 15%
- Si el cliente compró una bicicleta o una patineta, el descuento será del
10%
- Si el cliente compró un scooter eléctrico, el descuento será del 5%*/

let Vehicle = prompt("Ingrese el vehiculo que ha comprado")

if (Vehicle ==="carro"|| Vehicle==="moto"){
    alert("Tienes un descuento del 15%")
} else if(Vehicle ==="bicicleta"|| Vehicle==="patineta"){
    alert("Tienes un descuento del 10%")
}else{
    alert("Tienes un descuento del 5%")
}