function mostrar()
{
	var positivo;
	var negativo;
	var numero;
	var respuesta;
	positivo = 0;
	negativo = 1;
	respuesta = "si";
	while (respuesta != "no")
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		if (numero > 0)
		{
			positivo = positivo + numero;
		}
		if (numero < 0)
		{
			negativo = negativo * numero;
		}
		respuesta = prompt("¿Quiere ingresar otro número?");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN