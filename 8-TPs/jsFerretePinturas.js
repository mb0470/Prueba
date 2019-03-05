/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temp_f;
    var temp_c;
    temp_f = document.getElementById("Temperatura").value;
    temp_f = parseInt(temp_f);
    temp_c = temp_f - 32;
    alert(temp_c);
}

function CentigradosFahrenheit () 
{
	var temp_f;
    var temp_c;
    temp_c = document.getElementById("Temperatura").value;
    temp_c = parseInt(temp_c);
    temp_f = temp_c + 32;
    alert(temp_f);
}