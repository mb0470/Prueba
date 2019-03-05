function mostrar()
{
	var numero;
	var contador_pos;
	var contador_neg;
	var contador_cero;
	var contador_pares;
	var suma_pos;
	var suma_neg;
	var promedio_pos;
	var promedio_neg;
	var diferencia;
	var respuesta;
	//declarar contadores y variables 
	contador_pos = 0;
	contador_neg = 0;
	contador_cero = 0;
	contador_pares = 0;
	suma_pos = 0;
	suma_neg = 0;
	respuesta = "si";
	while(respuesta!="no")
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		if (numero > 0)
		{
			contador_pos = contador_pos + 1;
			suma_pos = suma_pos + numero;
		}
		else
		{
			if (numero < 0)
			{
				contador_neg = contador_neg + 1;
				suma_neg = suma_neg + numero;
			}
			else
			{
				if (numero == 0)
				{
					contador_cero = contador_cero + 1;
				}
			}
		}
		if (numero % 2 == 0 && numero != 0)
		{
			contador_pares = contador_pares + 1;
		}
		respuesta = prompt("¿Quiere ingresar otro número?");
	}
	promedio_pos = suma_pos / contador_pos;
	promedio_neg = suma_neg / contador_neg;
	diferencia = suma_pos - suma_neg;
	alert("Suma de los números negativos: " + suma_neg + ".");
	alert("Suma de los números positivos: " + suma_pos + ".");
	alert("Cantidad de números positivos: " + contador_pos + ".");
	alert("Cantidad de números negativos: " + contador_neg + ".");
	alert("Cantidad de ceros: " + contador_cero + ".");
	alert("Cantidad de números pares: " + contador_pares + ".");
	alert("Promedio de números positivos: " + promedio_pos + ".");
	alert("Promedio de números negativos: " + promedio_neg + ".");
	alert("Diferencia entre positivos y negativos: " + diferencia + ".");
}//FIN DE LA FUNCIÓN