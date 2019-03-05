function mostrar()
{
    var contador;
    var nota;
    var sumaNotas;
    var sexo;
    var sexoBaja;
    var notaBaja;
    var cantVarones;
    contador = 0;
    sumaNotas = 0;
    notaBaja = 10;
    cantVarones = 0;
    while (contador < 5)
    {
        contador = contador + 1;
        nota = prompt("Nota.");
        nota = parseInt(nota);
        while (nota < 0 || nota > 10)
        {
            nota = prompt("Número inválido. Vuelva a ingresar nota.");
            nota = parseInt(nota);
        }
        sumaNotas = sumaNotas + nota;
        sexo = prompt("Sexo: ");
        while (sexo != "f" && sexo != "m")
        {
            sexo = prompt("Valor inválido. vuelva a ingresar sexo: ");
        }
        if (nota <= notaBaja)
        {
            notaBaja = nota;
            sexoBaja = sexo;
        }
        if (sexo == "m" && nota >= 6)
        {
            cantVarones = cantVarones + 1;
        }
    }
    alert("Promedio: " + sumaNotas / 5 + ".")
    alert("Nota más baja y sexo de la persona: " + notaBaja + ", " + sexoBaja + ".");
    alert("Cantidad de varones con nota mayor o igual a 6: " + cantVarones + ".");
}