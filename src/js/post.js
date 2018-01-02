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
		init: function() {
			this.metadataIcon()
		}
	}
	post.init()
}

module.exports = Post
