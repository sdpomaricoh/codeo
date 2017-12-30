const $ = require('jquery')

const mainHero = () =>{
	const Hero = {
		init: function() {
			this.Height()
			this.Scroll()
		},
		Height: function() {
			if ($('#hero').length > 0 ) {
				const height = $(window).height()
				$('#hero').css('height', height * 0.9 + 'px')
			}
		},
		Scroll: function() {
			const body = $('body'), 
				hero = body.find('#hero')
		
			$(window).scroll(() => {
				const heroHeight = hero.height(), top = $(document).scrollTop()
				hero.css('opacity', (1 - top/heroHeight*1))
			})
		}
	}
	Hero.init()
} 

module.exports = mainHero
