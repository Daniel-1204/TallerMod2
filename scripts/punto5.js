// 5- En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo
// que encuentre el promedio de edades de los estudiantes mayores de 21 años y el
// promedio de edades del resto de estudiantes. Por cada estudiante se tiene un
// registro que contiene su código y edad.

let student = Number(prompt("Ingrese la cantidad de estudiantes"))
    
acumMayores = 0
acumMenores = 0
averageMayores = 0
averageMenores = 0

for (i=1; i<=student; i++){
    let age = Number(prompt("Ingrese edad del estudiante"+i));
    if (age > 21){
        acumMayores =acumMayores+age
        averageMayores = averageMayores+1
    }else if (age <=21){
        acumMenores = acumMenores+age
        averageMenores = averageMenores+1
    }
}

alert("El promedio de estudiantes mayores de 21 años es: "+acumMayores/averageMayores)
alert("El promedio de estudiantes menores de 21 años es: "+acumMenores/averageMenores)
