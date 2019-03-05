function mostrar()
{
    var num1;
    var num2;
    var resultado;
    num1 = prompt("Ingrese un número.");
    num1 = parseInt(num1);
    num2 = prompt("Ingrese otro número.");
    num2 = parseInt(num2);
    if (num1 == num2)
    {
        alert(num1 + ", " + num2 + ".");
    }
    else
    {
        if (num1 > num2)
        {
            resultado = num1 - num2;
            alert("Resultado: " + resultado + ".");
        }
        if (num1 < num2)
        {
            resultado = num1 + num2;
            alert("Resultado: " + resultado + ".");
            if (resultado > 10)
            {
                alert("La suma es " + resultado + " y superó el 10.");
            }
        }
    }
}