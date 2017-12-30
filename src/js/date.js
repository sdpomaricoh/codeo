const $ = require('jquery'), moment = require('moment')
require('moment/min/locales.min')

const Dates = () => {
	$(document).ready(()=>{
		moment.locale('es')
		$('.date time').each((i, date) => {
			var $date = $(date)
			$date.html(
				moment($date.attr('datetime')).format('MMMM DD, YYYY')
			)
		})
	})
}

module.exports = Dates
