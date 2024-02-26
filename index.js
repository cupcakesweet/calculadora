// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
  //Funcion resta
  function resta(num1,num2){
    return num1-num2
  }
  //funcion multiplica
  function multiplicar(num1,num2){
    return num1*num2
  }
//funcion dividir
function dividir(num1,num2){
    return num1/num2
}
//funcion factoria de un numero
function factorial (n) {
    let total = 1;
    for (i=1; i<=n; i++) {
      total = total * i;
    }
    return total;
  }
  //funcion exponente de un numero
  function exponente (num1,exponenteNum){
     return num1**exponenteNum
  }
  //funcion raiz cuadrada
  function raizCuadrada (num1) {
    Math.sqrt(num1)
    return num1
  }
  // Función principal del programa
  function calculadora() {
    var opcion = prompt(
      "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;
  
    if (opcion !== "5" && opcion !== "7") {
      num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
  
    switch (opcion) {
      case "1":
        resultado = sumar(num1, num2);
        break;
      case "2":
        resultado = restar(num1, num2);
        break;
      case "3":
        resultado = multiplicar(num1, num2);
        break;
      case "4":
        resultado = dividir(num1, num2);
        break;
      case "5":
        resultado = factorial(num1);
        break;
      case "6":
        var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
        resultado = exponente(num1, exponenteNum);
        break;
      case "7":
        resultado = raizCuadrada(num1);
        break;
      default:
        resultado = "Opción no válida";
        break;
    }
  
    alert("El resultado es: " + resultado);
  }
  
  // Llamar a la función principal
  calculadora();