function mostrar()
{
	var numero;
	var max;
	var min;
	var respuesta;
	// declarar variables
	max = -9999;
	min = 9999;
	respuesta='si';
	while(respuesta!='no')
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		if (numero > max)
		{
			max = numero;
		}
		if (numero < min)
		{
			min = numero;
		}
		respuesta = prompt("¿Quiere ingresar otro número?");
	}
	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}//FIN DE LA FUNCIÓN