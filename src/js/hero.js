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
		},
		Particle () {
			particlesJS('hero',
				{
				  'particles': {
				   'number': { 'value': 85, 'density': {'enable': true,'value_area': 800}},
				    'color': {'value': '#ffffff'},
				    'shape': {'type': 'polygon','stroke': {'width': 1,'color': '#ffffff'}, 'polygon': {'nb_sides': 5}},
				    'opacity': {'value': 0.5,'random': false,'anim': {'enable': false,'speed': 1,'opacity_min': 0.1,'sync': false}},
				    'size': {'value': 2,'random': true,'anim': {'enable': false,'speed': 40,'size_min': 0.1,'sync': false}},
				    'line_linked': {'enable': true,'distance': 150, 'color': '#ffffff','opacity': 0.4,'width': 2},
				    'move': { 
				    	'enable': true, 'speed': 6, 'direction': 'none', 'random': false, 'straight': false, 'out_mode': 'out', 'bounce': false, 
				    	'attract': { 'enable': false,'rotateX': 600,'rotateY': 1200}}
				  },
				  'interactivity': {
				    'detect_on': 'canvas',
				    'events': { 'onhover': { 'enable': true, 'mode': 'repulse' }, 'onclick': { 'enable': true, 'mode': 'push'}, 'resize': true},
				    'modes': {
				      'grab': { 'distance': 400,'line_linked': { 'opacity': 1}},
				      'bubble': {'distance': 400,'size': 40,'duration': 2,'opacity': 8,'speed': 3},
				      'repulse': {'distance': 200,'duration': 0.4},
				      'push': {'particles_nb': 4},
				      'remove': {'particles_nb': 2}
				    }
				  },
				  'retina_detect': true
				}
			) 
		}
	} 
	Hero.init()
} 

module.exports = mainHero
