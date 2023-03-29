// hecho por sergio ortiz garzon
function suma() {
  var a = parseInt(prompt("Ingrese el primer valor:"));
  var b = parseInt(prompt("Por favor ingrese el segundo valor"));
  var suma = a + b;
  alert(`Su resultado es ${suma}`);
}
function opbasicas() {
  var a = prompt("Que operacion deseas realizar");
  if (a == "resta" || a == "Resta" || a == "-") {
    let ar = parseInt(prompt("Ingrese el primer valor a restar"));
    let br = parseInt(prompt("Ingrese el segundo valor a restar"));
    let resta = ar - br;
    alert(`Su resultado es ${resta}`);
  } else if (a == "suma" || a == "Suma" || a == "+") {
    let as = parseInt(prompt("Ingrese el primer valor a sumar"));
    let bs = parseInt(prompt("Ingrese el segundo valor a sumar"));
    let suma = as + bs;
    alert(`Su resultado es ${suma}`);
  } else if (
    a == "multiplicacion" ||
    a == "multiplicar" ||
    a == "Multiplicacion" ||
    a == "*"
  ) {
    let am = parseInt(prompt("Ingrese el primer valor a multiplicar"));
    let bm = parseInt(prompt("Ingrese el segundo valor a multiplicar"));
    let multiplicacion = am * bm;
    alert(`Su resultado es ${multiplicacion}`);
  } else if (a == "division" || a == "Division" || a == "/") {
    let ad = parseInt(prompt("Ingrese el primer valor a dividir"));
    let bd = parseInt(prompt("Ingrese el segundo valor a dividir"));
    let division = ad / bd;
    alert(`Su resultado es ${division}`);
  } else {
    alert("No se encontro la operación");
  }
}

function promedio() {
  var a = parseInt(prompt("Ingrese la primera nota"));
  var b = parseInt(prompt("Ingrese la segunda nota"));
  var c = parseInt(prompt("Ingrese la tercera nota"));
  var d = parseInt(prompt("Ingrese la cuarta nota"));
  var e = parseInt(prompt("Ingrese la quinta nota"));
  var f = parseInt(prompt("Ingrese la sexta nota"));
  var g = parseInt(prompt("Ingrese la quinta nota"));
  var promedio = (a + b + c + d + e + f + g) / 7;
  alert(`Su promedio es ${promedio}`);
}

function inversion() {
  var a = parseInt(prompt("Ingrese el valor que desea invertir"));
  var b = prompt("Porfavor ingrese el número de años que desea invertir");
  var interes = 1.7;
  var pa = interes * 12;
  var ingreso = pa * b;
  var total = a * ingreso;
  var confirmar = confirm(
    "La tasa de interes es de 1.7%, acepta los terminos?"
  );
  if (confirmar == true) {
    alert(`Su ganancia en ${b} años es ${ingreso} y su total es ${total} `);
  } else {
    alert("Cancelo el proceso");
  }
}

function mayor() {
  var a = prompt("Ingresa un numero");
  var b = prompt("Ingrese segundo numero");
  var c = prompt("Ingrese el tercer numero");
  if (a > b && a > c) {
    alert(`${a} es mayor que ${b} y que ${c}`);
  } else if (b > a && b > c) {
    alert`${b} es mayor que ${a} y mayor que ${c}`;
  } else if (c > a && c > b){
    alert(`${c} es mayor que ${a} y que ${b}`);
  }else {
    alert("Son iguales")
  }
}
