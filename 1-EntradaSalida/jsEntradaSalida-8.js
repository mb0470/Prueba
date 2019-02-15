/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
    var divisor;
    var cociente;
    var resto;
    dividendo = parseInt(dividendo);
    divisor = parseInt(divisor);
    dividendo = document.getElementById("numeroDividendo").value;
    divisor = document.getElementById("numeroDivisor").value;
    cociente = parseInt(dividendo) / parseInt(divisor);
    cociente = parseInt(cociente);
    resto = parseInt(dividendo) - parseInt(divisor) * parseInt(cociente);
    alert(resto);
}