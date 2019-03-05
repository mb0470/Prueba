function mostrar()
{
	var contador;
	var num;
	var acumulador;
	contador = 0;
	acumulador = 0;
	while (contador < 5)
	{
		contador = contador + 1;
		num = prompt("Ingrese número.");
		num = parseInt(num);
		acumulador = acumulador + num;
	}
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/5;
}//FIN DE LA FUNCIÓN