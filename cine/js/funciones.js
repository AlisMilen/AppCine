function titulo()
{
	var titulo=document.getElementById('titulo').value;
	if(titulo.length<4)
	{
		alert("Minimo 4 caracteres");
	}
}
var genero=["fantastico","historico","documental"];
function tipo()
{
	var objeto_select=document.getElementById("select");
	for(i=0; i<genero.length; i++)
	{
		var obj_option=document.createElement("option");
		obj_option.innerHTML=genero[i];
		objeto_select.appendChild(obj_option);
	}
}
function validar()
{
	var titulo=document.getElementsByTagName("input")[0].value;
	var genero=document.getElementById("select").value;
	if(titulo.length>4)
	{
		alert("Se va a registrar la película con título "+titulo+" y de género "+genero);
	}
}