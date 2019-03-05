function mostrar()
{
    var respuesta;
    var letra;
    var numero;
    var cantPar;
    var cantImpar;
    var cantCero;
    var sumaPos;
    var sumaNeg;
    var contadorPos;
    var max;
    var letraMax;
    var letraMin;
    var min;
    cantPar = 0;
    cantImpar = 0;
    cantCero = 0;
    sumaPos = 0;
    sumaNeg = 0;
    contadorPos = 0;
    max = -100;
    min = 100;
    respuesta = "si";
    while (respuesta != "no")
    {
        letra = prompt("Ingrese una letra");
        numero = prompt("Ingrese un número (entre -100 y 100):");
        numero = parseInt(numero);
        while (numero < -100 || numero > 100)
        {
            numero = prompt("Número inválido. Ingrese otro número");
            numero = parseInt(numero);    
        }
        if (numero == 0)
        {
            cantCero = cantCero + 1;
        }
        else
        {
            if (numero % 2 == 1)
            {
                cantImpar = cantImpar + 1;
            }
            if (numero % 2 == 0)
            {
                cantPar = cantPar + 1;
            }
        }
        if(numero > 0)
        {
            contadorPos = contadorPos + 1;
            sumaPos = sumaPos + numero;
        }
        else
        {
            if (numero < 0)
            {
                sumaNeg = sumaNeg + numero;
            }
        }
        if (numero > max)
        {
            max = numero;
            letraMax = letra;
        }
        if (numero < min)
        {
            min = numero;
            letraMin = letra;
        }
        respuesta = prompt("¿Quiere continuar?");
    }
    document.write("Cantidad de números pares: " + cantPar + ".");
    document.write("Cantidad de números impares: " + cantImpar + ".");
    document.write("Cantidad de ceros: " + cantCero + ".");
    document.write("Promedio de los números positivos ingresados: " + (sumaPos/contadorPos) + ".");
    document.write("Suma de los números negativos: " + sumaNeg + ".");
    document.write("Letra del número máximo: " + letraMax + ". Letra del número mínimo: " + letraMin + ".");
}