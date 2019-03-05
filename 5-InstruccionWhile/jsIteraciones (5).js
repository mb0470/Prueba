function mostrar()
{
    var sexo = prompt("Ingrese f ó m .");
    while (sexo != "m" && sexo != "f")
    {
        sexo = prompt("Ingrese f ó m .");
    }
    document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN