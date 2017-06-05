var contactos = [
	{
		"nombre": "Bistro La Victoria",
		"direccion": "Tabasco 327 Roma Nte. 06700 Ciudad de México, CDMX México",
    "comida" : "Mariscos",
		"coordenadas": "",
	},
  {
		"nombre": "Fonda Fina",
		"direccion": "  Medellín 79 Roma Nte. 06700 Ciudad de México, CDMX",
    "comida" : " Comida mexicana",
		"coordenadas": "",
	},
  {
		"nombre": "ZUCCHERO",
		"direccion": " Valladolid 100, Cuauhtémoc Roma Nte. 06700 Ciudad de México, CDMX México",
    "comida" : "Comida mexicana",
		"coordenadas": "",
	},
  {
		"nombre": "Contramar",
		"direccion": "Calle Durango 200, Roma, Roma Nte., 06700 Cuauhtémoc, CDMX",
    "comida" : "Mariscos",
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
                '<h5 class="name">__nombre__</h5>'+
                '<p class="black-text">__direccion</p>'+
                '<p class="black-text">___comida__</p>'+
              '</span>'+
            '</div>' +
          '</div>' +
        '</div>' +
	'</div>';
