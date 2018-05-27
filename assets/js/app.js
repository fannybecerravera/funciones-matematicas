/*FUNCIONES MATEMÁTICAS
Crea dos funciones, add y multiply. 
Cada una debe tomar dos argumentos. 
La función add debe sumar sus argumentos y devolver el resultado. 
La funcion multiply debe multiplicar sus argumentos. 
Usando solamente estas dos funciones, resuelva este simple problema matemático: 36325 * (9824 + 777).*/ 

const add = function (num1, num2) {
  return num1 + num2;
}
const multyply = function (num1, num2) {
  return num1 * num2;
}
const summation = add(9824, 777);
const result= multyply(36325, summation);
document.write( "El resultado de la operación 36325 * (9824 + 777) es : " + result)
  

  