const $ = require('jquery')

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
				const url = intent+'?text='+text+'&url='+href+'&via=codeoweb'	
				$('#twitterShare').click(function(e) {
					window.open(url, 'Twitter', 'height=360,width=480').focus()
				})
			})
		},
		init: function() {
			this.metadataIcon()
			this.shared()
			this.facebook()
			this.twitter()
		}
	}
	post.init()
}

module.exports = Post
