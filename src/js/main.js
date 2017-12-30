const Menu = require('./menu')
const Hero = require('./hero')
const Game = require('./game')
const Dates = require('./date')
const $ = require('jquery')

$(document).ready(() => {
	Menu()
	Hero()
	Game()
	Dates()
})
