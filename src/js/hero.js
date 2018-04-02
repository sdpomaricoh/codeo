const mainHero = () =>{
	const Hero = {
		init: function() {
			this.Height()
			this.Scroll()
		},
		Height: function() {
			if ($('#hero').length > 0 ) {
				const height = $(window).height()
				$('#hero').css('height', height * 0.7 + 'px')
			}
		},
		Scroll: function() {
			const hero = $('#hero'), postHeader = $('.postHeader')
			if (hero.length !== 0) {
				$(window).scroll(() => {
					const heroHeight = hero.height(), top = $(document).scrollTop()
					hero.css('opacity', (1 - top/heroHeight*1))
				})
			} else if (postHeader.length !== 0) { 
				$(window).scroll(() => {
					const headerHeight = postHeader.height(), top = $(document).scrollTop()
					postHeader.css('opacity', (1 - top/headerHeight*1))
				})
			}	
		}
	} 
	Hero.init()
} 

module.exports = mainHero
