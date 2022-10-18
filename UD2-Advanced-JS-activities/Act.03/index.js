/*
Crear un array llamado meses y que almacene el nombre de los doce meses del año.
Mostrar por pantalla los doce nombres utilizando la función alert().
*/

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var output = "";
meses.forEach((element) =>{
    output+=element+"\n";
});
alert(output);