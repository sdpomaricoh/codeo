const Menu = require('./menu')
const Dates = require('./date')
const Post = require('./post')
const Notificacion = require('./notification')

window.onload = function() {
	$('#loading').delay(900).fadeOut('slow')
}

$(document).ready(function() {
	Menu()
	Dates()
	Post()
	Notificacion()
})

