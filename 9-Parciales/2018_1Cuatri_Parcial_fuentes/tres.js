function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;
    precio = prompt("Precio: ");
    precio = parseInt(precio);
    descuento = prompt("Descuento (%):");
    descuento = parseInt(descuento);
    precioFinal = precio - (precio * descuento / 100);
    document.getElementById("elPrecioFinal").value = precioFinal;
}