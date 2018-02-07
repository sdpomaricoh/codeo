
const Post = () => {
	const post = {
		metadataIcon: function() {
			$(document).ready(() =>{
				$('#metadataIcon').click(function() {
					$(this).toggleClass('icon-is-active')
					$('.postMetaContainer').toggleClass('container-is-active')
				})
			})
		},
		shared: function () {
			$(document).ready(() =>{
				if (navigator.share) {
					const share = $('#webShare')
					const title = share.data('title')
					const href = share.data('href')
					share.click(function(e) {
						e.preventDefault()

						navigator.share({
							url: href,
							title: title
						})

						return false
					})
				}
			})
		},
		facebook: function() {
			$(document).ready(() =>{
				$('#facebookShare').click(function() {
					const url = $(this).data('href')
					FB.ui({
						method: 'share',
						mobile_iframe: true,
						href: url
					}, function(response) {})
				})
			})
		},
		twitter: function() {
			$(document).ready( function() {
				const intent = 'https://twitter.com/intent/tweet?'
				const title = $('#twitterShare').data('title')
				const text = encodeURI(title)
				const href = $('#twitterShare').data('href')
				const url = intent+'text='+text+'&url='+href+'&via=codeoweb'	
				$('#twitterShare').click(function(e) {
					window.open(url, 'Twitter', 'height=340,width=480').focus()
				})
			})
		},
		linkedin: function () {
			$(document).ready( function() {
				const intent = 'https://www.linkedin.com/shareArticle?mini=true&url='
				const title = $('#linkedinShare').data('title')
				const text = encodeURI(title)
				const href = $('#linkedinShare').data('href')
				const url = intent+href+'&title='+text+'&source=Codeo'
				$('#linkedinShare').click(function(e) {
					window.open(url, 'linkedin', 'height=340,width=480').focus()
				})
			})
		},
		whatsapp: function() {
			$(document).ready( function() {
				const whatsapp = $('#whatsappShare')
				const intent = 'whatsapp://send?text='
				const title = whatsapp.data('title')
				const text = encodeURI(title)
				const href = whatsapp.data('href')
				const url = intent+text+' - '+ href
				whatsapp.attr('href', url)
			})
		},
		progress: function() {
			$(document).ready( function() {

				const progressBar = $('.progressBar')

				const getValue = function() {
        			return $(window).scrollTop()
    			}

    			const getMax = function() {
        			return $(document).height() - $(window).height()
    			}

    			const getWidth = function() {
    				const max = getMax()
    				const value = getValue()
    				let width = (value/max) * 100
    				width = width + '%'
            		return width
    			}

    			const setWidth = function() {
            		progressBar.css({ width: getWidth() })
        		}

        		$(document).on('scroll', function() {
        			const isScroll = $('header').hasClass('header-is-scroll')
        			if (isScroll)
        				progressBar.css('opacity', 1)
        			else
        				progressBar.css('opacity', 0)
        			setWidth()
        		})
        		
        		$(window).on('resize', function() {
            		setWidth()
        		})
			})
		},
		init: function() {
			this.metadataIcon()
			this.shared()
			this.facebook()
			this.twitter()
			this.linkedin()
			this.whatsapp()
			this.progress()
		}
	}
	post.init()
}

module.exports = Post
