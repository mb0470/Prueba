/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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