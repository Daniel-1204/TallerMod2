// 7- Desarrollar un algoritmo que permita ingresar 5 productos de la canasta familiar;
// nombre del producto y su precio, que al final me muestra cuanto es el subtotal
// (precio sin IVA), cuánto es el IVA del 19% y cuál es el total que debe pagar una
// persona.


acumPrice =0

for (i = 1; i <=5; i++) {
    let product = prompt("Ingrese el producto de la canasta familiar "+i),
        priceProduct = Number(prompt("Ingrese precio del producto"+i));
    
    acumPrice = acumPrice+priceProduct
    priceIVA = (acumPrice*19)/100
    totalPrice = acumPrice+priceIVA
}

alert("El precio subtotal es "+acumPrice + " el iva del 19% es "+priceIVA+ "precio total a pagar es: "+totalPrice)




