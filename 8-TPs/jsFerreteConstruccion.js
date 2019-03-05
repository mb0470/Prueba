/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
    var largo;
    var ancho;
    var radio;
    var alambre;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    radio = parseInt(radio);
    alambre = (largo + ancho) * 3;
    alert("Cantidad de alambre: " + alambre + ".");
}
function Circulo ()
{
	var largo;
    var ancho;
    var radio;
    var alambre;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    radio = parseInt(radio);
    alambre = (radio * 2 * Math.PI) * 3;
    alert("Cantidad de alambre: " + alambre + ".");
}
function Materiales ()
{
	var largo;
    var ancho;
    var radio;
    var area;
    var cemento;
    var cal;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    radio = parseInt(radio);
    area = largo + ancho;
    cal = area * 3;
    cemento = area * 2;
    alert("Bolsas de cal: " + cal + ". Bolsas de cemento: " + cemento + ".");
}