function mostrar()
{
//tomo la edad  
    var edad;
    var e_civil;
    edad = document.getElementById("edad").value;
    e_civil = document.getElementById("estadoCivil").value;
    if(edad < 18 && e_civil != "Soltero")
    {
        alert("Es muy pequeño para no ser soltero.");
    }
}//FIN DE LA FUNCIÓN