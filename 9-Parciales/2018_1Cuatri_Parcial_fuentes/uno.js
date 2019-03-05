function mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    largo = prompt("Largo del rectángulo:");
    largo = parseInt(largo);
    ancho = prompt("Ancho del rectángulo:");
    ancho = parseInt(ancho);
    perimetro = (largo + ancho) * 2;
    alert("Perímetro del rectángulo: " + perimetro + ".");
}