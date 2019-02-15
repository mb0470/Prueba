/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var suma;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    suma = parseInt(num1) + parseInt(num2);
    alert("La suma es " + suma + ".");
}

function restar()
{
	var num1;
    var num2;
    var resta;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    resta = parseInt(num1) - parseInt(num2);
    alert("La resta es " + resta + ".");
}

function multiplicar()
{ 
	var num1;
    var num2;
    var prod;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    prod = parseInt(num1) * parseInt(num2);
    alert("El producto es " + prod + ".");
}

function dividir()
{
	var num1;
    var num2;
    var coci;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    coci = parseInt(num1) / parseInt(num2);
    alert("El cociente es " + coci + ".");
}