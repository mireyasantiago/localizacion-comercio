(function () {

//se realiza la funcion cargar pagina
function cargarPagina(){
	obtenerUbicacion();//llamamos a la funcion
	$(".comercio").click(cambiarUbicacion); //llamamos a la funcion al hacer click
}

/*var obtenerUbicacion = function () {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(mostrarPosicion);
} else {
alert("Actualizar el navegador");
}
}*/

/*var contactos = [
	{
		"nombre": "Bistro La Victoria",
		"direccion": "Tabasco 327 Roma Nte. 06700 Ciudad de México, CDMX México",
    "comida" : "Mariscos",
		"longitud": "",
		"latitud": ""
	},
  {
		"nombre": "Helados",
		"direccion": "  Tabasco 327
			Roma Nte.
			06700 Ciudad de México, CDMX
			México",
    "comida" : " Comida mexicana",
		"coordenadas": "",
	},
  {
		"nombre": "ZUCCHERO",
		"direccion": " Valladolid 100, Cuauhtémoc Roma Nte. 06700 Ciudad de México, CDMX México",
    "comida" : "Comida mexicana",
		"coordenadas": "",
	},

];

var plantillaContacto = '<div class="row contact">' +
        '<div class="card-panel  grey lighten-5 z-depth-1">' +
          '<div class="row valign-wrapper">' +
            '<div class="col s2">' +
              '<img src="__foto__" alt="Contact" class="circle responsive-img">' +
            '</div>' +
            '<div class="col s10">' +
              '<span class="black-text">'+
               '<h5 class="name data-latitud=__latitud__  data-longitud=__longitud__ >__nombre__</h5>'+
                '<p class="black-text">__direccion</p>'+
                '<p class="black-text">___comida__</p>'+
              '</span>'+
            '</div>' +
          '</div>' +
        '</div>' +
	'</div>';
*/


function obtenerUbicacion(e) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mostrarPosicion);
	} else {
		alert("Geolocalización no es soportado en tu navegador");
	}
}

function mostrarPosicion(posicion){
	var latitud = posicion.coords.latitude;
	var longitud = posicion.coords.longitude;
	var coordenadas = {
		lat: latitud,
		lng: longitud
	};

	mostrarMapa(coordenadas);//se llama a la function
}

function mostrarMapa(coordenadas){
	var map = new google.maps.Map($('.map')[0],{//se convierte en un arreglo
		zoom: 17,
		center: coordenadas
	});
	var marker = new google.maps.Marker({
		position: coordenadas,
		map: map
	});
}

function cambiarUbicacion(){
	var latitud = $(this).data("latitud");
	var longitud = $(this).data("longitud");

	var coordenadas={
		lat: latitud,
		lng: longitud

	};

  mostrarMapa(coordenadas);
}

$(document).ready(cargarPagina);

})();
