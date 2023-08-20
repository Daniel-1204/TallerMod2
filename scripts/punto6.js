acumMayores = 0
acumMenores = 0

for (i=1;i<=3;i++){
    let age = Number(prompt("Ingrese la edad del estudiante "+i))
    
    if (age>=18){
        acumMayores=acumMayores+1
    }else{
        if(age<18){
            acumMenores=acumMenores+1
        }
    }
}   

alert("La cantidad de estudiantes mayores de 18 años es: "+acumMayores)
alert("La cantidad de estudiantes menores de 18 años es: "+acumMenores)





