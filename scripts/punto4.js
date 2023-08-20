// 4- Una distribuidora de huevos quiere contratarlo para que realice un algoritmo que
// calcule el precio de venta para una cantidad de huevos a llevar por un determinado
// cliente. Guiándose por la siguiente información:

let amountEggs = prompt("Ingrese la cantidad de huevos a comprar")
    
    Eggs = 250

    price = Eggs*amountEggs

if (amountEggs <= 100){
    Discount1 = (Eggs*3)/100
    price1 = (Eggs-Discount1)*amountEggs
    alert("El precio de venta por "+ amountEggs +" huevos con el 3% de descuento es de "+price1)
}else if (amountEggs > 100 && amountEggs <=200){
    Discount2 = (Eggs*5)/100
    price2 = (Eggs-Discount2)*amountEggs
    alert("El precio de venta por "+ amountEggs +" huevos con el 5% de descuento es de "+price2)
}else if(amountEggs > 200 && amountEggs <= 300){
    Discount3 = (Eggs*8)/100
    price3 = (Eggs-Discount3)*amountEggs
    alert("El precio de venta por "+ amountEggs +" huevos con el 8% de descuento es de "+price3)
} else if(amountEggs >= 301){
    Discount4 = (Eggs*10)/100
    price4 = (Eggs-Discount4)*amountEggs
    alert("El precio de venta por "+ amountEggs +" huevos con el 10% de descuento es de "+price4)
}
