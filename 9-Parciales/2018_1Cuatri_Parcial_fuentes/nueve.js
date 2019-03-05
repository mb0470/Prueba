function mostrar()
{
    var contador;
    var marca;
    var peso;
    var temperatura;
    var cantTempPares;
    var masPesado;
    var menosPesado;
    var marcaMasPesado;
    var cantProdCero;
    var pesoTotal;
    var respuesta;
    contador = 0;
    cantTempPares = 0;
    cantProdCero = 0;
    masPesado = 0;
    menosPesado = 100;
    pesoTotal = 0;
    respuesta = "si";
    while (respuesta != "no")
    {
        contador = contador + 1;
        marca = prompt("Marca del producto:");
        peso = prompt("Peso (entre 1 y 100 kilos):");
        peso = parseInt(peso);
        while (peso < 1 || peso > 100)
        {
            peso = prompt("Dato inválido. Vuelva a ingresar el peso (entre 1 y 100 kilos):");
            peso = parseInt(peso);    
        }
        pesoTotal = pesoTotal + peso;
        temperatura = prompt("Temperatura de almacenamiento (entre -30°C y 30°C):");
        temperatura = parseInt(temperatura);
        while (temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Dato inválido. Vuelva a ingresar la temperatura de almacenamiento (entre -30°C y 30°C):");
            temperatura = parseInt(temperatura);
        }
        if (temperatura % 2 == 0)
        {
            cantTempPares = cantTempPares + 1;
        }
        if (temperatura < 0)
        {
            cantProdCero = cantProdCero + 1;
        }
        if (peso > masPesado)
        {
            masPesado = peso;
            marcaMasPesado = marca;
        }
        if (peso < menosPesado)
        {
            menosPesado = peso;
        }
        respuesta = prompt("¿Quiere ingresar otro produto?");
    }
    document.write("Cantidad de temperaturas pares: " + cantTempPares + ".");
    document.write(" Marca del producto más pesado: " + marcaMasPesado + ".");
    document.write(" Cantidad de productos que se conservan a menos de 0 grados: " + cantProdCero + ".");
    document.write(" Promedio del peso de todos los productos: " + pesoTotal / contador + ".");
    document.write(" Peso máximo: " + masPesado + ". Peso mínimo: " + menosPesado + ".");
}