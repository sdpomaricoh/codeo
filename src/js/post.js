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
		init: function() {
			this.metadataIcon()
			this.shared()
			this.facebook()
		}
	}
	post.init()
}

module.exports = Post
