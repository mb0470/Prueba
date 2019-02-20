function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	num = Math.floor(Math.random() * 10)+1;
	if(num == 9 || num == 10)
	{
		alert(num + ". EXCELENTE");
	}
	else
	{
		if(num >= 4 && num < 9)
		{
			alert(num + ". APROBÓ");
		}
		else
		{
			alert(num + ". Vamos, la próxima se puede.");
		}
	}
}//FIN DE LA FUNCIÓN