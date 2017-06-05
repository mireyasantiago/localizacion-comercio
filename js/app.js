var contactos = [
	{
		"nombre": "Bistro La Victoria",
		"direccion": "Tabasco 327 Roma Nte.  06700 Ciudad de México, CDMX  México",
    "comida": "Mariscos"
		"foto": "img/imagen.png"
	}
  {
    "nombre": "Fonda Fina",
    "direccion": "Medellín 79 Roma Nte.06700 Ciudad de México, CDMX México",
    "comida": "Comida mexicana"
    "foto": "img/imagen.png"
  }
  {
    "nombre": "ZUCCHERO",
    "direccion": "Valladolid 100, Cuauhtémoc Roma Nte. 06700 Ciudad de México, CDMX México",
    "comida": "Comida mexicana"
    "foto": "img/imagen.png"
  }
  {
    "nombre": "Contramar",
    "direccion": "Calle Durango 200, Roma, Roma Nte., 06700 Cuauhtémoc, CDMX",
    "comida": "Mariscos"
    "foto": "img/imagen.png"
  }
];

var plantillaContacto = '<article class="row contact">' +
        '<div class="card-panel grey lighten-5 z-depth-1">' +
          '<div class="row valign-wrapper">' +
            '<div class="col s2">' +
              '<img src="__foto__" alt="Contact" class="circle responsive-img">' +
            '</div>' +
            '<div class="col s10">' +
            '<span class="black-text">'+
              '<h5>__nombre__</h5>'+
              '<p>__direccion__</p>'+
              '<p>__comida__</p>'+
            '</span>'+
            '</div>' +
          '</div>' +
        '</div>' +
	'</article>';

var cargarPagina = function () {
	$("#search-form").submit(filtrarContactos);
};

var filtrarContactos = function (e) {
	e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var contactosFiltrados = contactos.filter(function (contacto) {
		return contacto.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
	});
	mostrarContactos(contactosFiltrados);
};

var mostrarContactos = function (contactos) {
	var plantillaFinal = "";
	contactos.forEach(function (contacto) {
		plantillaFinal += plantillaContacto.replace("__nombre__", contacto.nombre)
			.replace("__numero__", contacto.numero)
			.replace("__foto__", contacto.foto);
	});
	$(".contacts").html(plantillaFinal);
};

$(document).ready(cargarPagina);
