function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';
	while (respuesta != "no")
	{
		contador = contador + 1;
		num = prompt("Ingrese un número.");
		num = parseInt(num);
		acumulador = acumulador + num;
		respuesta = prompt("¿Quiere ingresar otro número?");
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN