/*Ejercicio: Múltiplos

• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero
*/

function esMultiplo(num1: number, num2: number): boolean {
  return num1 % num2 === 0;
}

console.log(esMultiplo(10, 5));
