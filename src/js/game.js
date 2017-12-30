const $ = require('jquery')//,THREE = require('three')

const Game = () =>{
	const game = {

		HEIGHT: $(window).height() * 0.9,
		WIDTH: $(window).width(),
		init: function() {
			//console.log(this.WIDTH, this.HEIGHT)
		}
	}

	game.init()
}

module.exports = Game
