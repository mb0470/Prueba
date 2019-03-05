/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparas;
    var marca;
    var precio;
    var precio_d;
    var p_desc;
    var desc;
    var impuesto;
    lamparas = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;
    lamparas = parseInt(lamparas);
    if (lamparas >= 6)
    {
        p_desc = 50;
    }
    else
    {
        if (lamparas == 5)
        {
            if (marca == "ArgentinaLuz")
            {
                p_desc = 40;
            }
            else
            {
                p_desc = 30;
            }
        }
        else
        {
            if (lamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    p_desc = 25;
                }
                else
                {
                    p_desc = 20;
                }
            }
            else
            {
                if (lamparas == 3)
                {
                    if (marca == "ArgentinaLuz")
                    {
                        p_desc = 15;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas")
                        {
                            p_desc = 10;
                        }
                        else
                        {
                            p_desc = 5;
                        }
                    }
                }
            }
        }
    }
    p_desc = parseInt(p_desc);
    precio = 35;
    desc = precio - precio * (p_desc/100);
    precio_d = precio - desc;
    if (precio_d > 120)
    {
        impuesto = precio_d * 10/100;
        precio_d = precio_d + impuesto
        alert("Usted pagó " + precio_d + " de IIBB, siendo " + impuesto + " el impuesto que se pago.");
    }
    document.getElementById("precioDescuento").value = precio_d;
}