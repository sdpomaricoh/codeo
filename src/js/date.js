
const Dates = () => {
	moment.locale('es')
	$('.date time').each((i, date) => {
		var $date = $(date)
		$date.html(
			moment($date.attr('datetime')).format('MMMM DD, YYYY')
		)
	})
}

module.exports = Dates
