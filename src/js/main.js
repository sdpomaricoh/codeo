const Menu = require('./menu')
const Dates = require('./date')
const Post = require('./post')

window.onload = function() {
	$('#loading').delay(900).fadeOut('slow')
}

$(document).ready(function() {
	Menu()
	Dates()
	Post()
})

