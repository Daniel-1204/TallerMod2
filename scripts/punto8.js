// 8- Se desea elaborar un algoritmo que determine cuántas personas de un grupo
// tienen hijos y cuántos no tienen, además se desea conocer el promedio del número
// de hijos.

let totalPersons = 0;
let personsWithSons = 0;
let totalSons = 0;

function obtenerNumeroHijos() {
  return parseInt(prompt("Ingrese el número de hijos de la persona (ingrese una letra para finalizar):"));
}


while (true) {
  const numberSons = obtenerNumeroHijos();

  if (numberSons >= 0) {
    totalPersons=totalPersons+1;

    if (numberSons > 0) {
      personsWithSons=personsWithSons+1;
      totalSons += numberSons;
    }
  } else {
    break;
  }
}


if (totalPersons > 0) {
  const averageSons = totalSons / personsWithSons;

  alert(`Personas con hijos: `+personsWithSons);
  alert(`Personas sin hijos: ${totalPersons - personsWithSons}`);
  alert(`Promedio de hijos: `+averageSons);

}
