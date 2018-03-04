const menuFullWidth = () => {
	const Menu = {
		settings: {
			menubtn: $('.menuIcon-toggle'),
			menu: $('.menu'),
			navigation: $('header'),
			closebtn: $('.menu-close'),
			isOpen: false,
			isAnimating: false
		},
		bindUIActions: function() {
			const e = this.settings
			e.closebtn.click(()=>{
				Menu.close()
			})
			e.menubtn.click(()=>{
				Menu.open()
			})
			$(window).scroll(() => {
				const scroll = $(window).scrollTop()
				Menu.scroll(scroll)
			})
		},
		init: function() {
			this.bindUIActions()
		},
		close: function() {
			const e = this.settings
			$.each($('.menu-item').get().reverse(), (i, el) => {
				setTimeout(() =>{ 
					$(el).css({'opacity':0})
				},1 + ( i * 60 )) 
			})
			function hidden() {
				e.menu.css('display', 'none')
				e.isAnimating = false
			}
			if (!e.isAnimating) {
				e.isOpen = false
				e.isAnimating = true
				e.menu.removeClass('menu-is-active')
				e.closebtn.removeClass('menu-close-is-active')
				e.navigation.removeClass('header-is-up')
				setTimeout(hidden, 1200)
			}
		},
		open: function() {
			const e = this.settings
			function show() {
				e.menu.addClass('menu-is-active')
				e.navigation.addClass('header-is-up')
				e.closebtn.addClass('menu-close-is-active')
				e.isAnimating = false
				$.each($('.menu-item'), (i, el) => { 
					setTimeout(() => { 
						$(el).animate( {'opacity':1} ) 
					},500 + ( i * 80 )) 
				})
			}

			if (!e.isAnimating) {
				e.isOpen = true
				e.isAnimating = true
				e.menu.css('display', 'block')
				setTimeout(show, 100)
			}
			
		},
		scroll: function(scroll) {
			const hero = $('#hero').length, postHeader = $('.postHeader').length, authorHeader = $('.authorHeader').length
			if (hero !== 0) {
				const e = this.settings, height = $('#hero').height() - e.navigation.height()
				if (scroll >= height) {
					e.navigation.addClass('header-is-scroll')
				} else {
					e.navigation.removeClass('header-is-scroll')
				}
			} else if (postHeader !== 0) {
				const e = this.settings, height = $('.postHeader').height() - $('header').height()
				if (scroll >= height) {
					e.navigation.addClass('header-is-scroll')
					$('.logo-img > svg.is-post').addClass('is-logo-scroll')
					$('.menuIcon-toggle.is-post').addClass('is-toggle-scroll')
				} else {
					e.navigation.removeClass('header-is-scroll')
					$('.logo-img > svg.is-post').removeClass('is-logo-scroll')
					$('.menuIcon-toggle.is-post').removeClass('is-toggle-scroll')
				}
			}else if(authorHeader !== 0) {
				const e = this.settings, height = $('.authorHeader').height() - e.navigation.height()
				if (scroll >= height) {
					e.navigation.addClass('header-is-scroll')
				} else {
					e.navigation.removeClass('header-is-scroll')
				}
			}  
		}
	}

	Menu.init()
}

module.exports = menuFullWidth
