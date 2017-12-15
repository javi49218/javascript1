var alumnos = [
		{"codigo":"001","nombre":"jose","nota":8},
		{"codigo":"002","nombre":"Leticia","nota":6},
		{"codigo":"003","nombre":"Carla","nota":9.5},
		{"codigo":"004","nombre":"Fantino","nota":4},
		{"codigo":"005","nombre":"Hugo","nota":7.5},
		{"codigo":"006","nombre":"Celia","nota":5.5},
		{"codigo":"007","nombre":"Victor","nota":8.5},
		{"codigo":"008","nombre":"Gary","nota":6},
		{"codigo":"009","nombre":"Pedro","nota":8},
		{"codigo":"010","nombre":"Fifi","nota":2}
];

var texto = document.getElementById("mostrar");
var prom = document.getElementById("promedio");
var may = document.getElementById("mayor");
var men = document.getElementById("menor");

function mostrar_todo()
{
	var cadena = "";
	for(var i = 0 ; i < alumnos.length ; i++)
	{
		cadena +=  "Codigo:" + alumnos[i].codigo + " - Nombre:" + alumnos[i].nombre + " - Nota:" + alumnos[i].nota + "<br>";
	}
	texto.innerHTML = cadena;
}

function promedio()
{
	var cantidad = 0;
	var notas = 0;
	var promedio;
	for(var j = 0; j < alumnos.length ; j++)
	{
		notas += alumnos[j].nota;
		cantidad++;
	}
	console.log(notas);
	console.log(cantidad);
	promedio = notas/cantidad;
	prom.innerHTML = "El promedio de notas es: " + promedio;
}

function mayor_nota()
{
	var mayor = 0;
	var nombre ="";
	for(var k = 0; k < alumnos.length ; k++)
	{
		if(alumnos[k].nota > mayor)
		{
			mayor = alumnos[k].nota;
			nombre = alumnos[k].nombre;
		}
	}
	may.innerHTML = "La mayor nota es de: " + nombre + " con " + mayor;
}

function menor_nota()
{
	var menor = 10;
	var nombre ="";
	for(var l = 0; l < alumnos.length ; l++)
	{
		if(alumnos[l].nota < menor)
		{
			menor = alumnos[l].nota;
			nombre = alumnos[l].nombre;
		}
	}
	men.innerHTML = "La menor nota es de: " + nombre + " con " + menor;
}
