import { messaging, db } from './firebase'

const Notificactions = () => {
	const notificationBtn = $('#notification')
	let userToken = null, isSubscribed = false

	if ( 'serviceWorker' in navigator ) {
		navigator.serviceWorker.register('./assets/js/sw.js')
			.then( registration => {
				console.log('Successfully registered Service Worker')
				notificationBtn.addClass('active')
				messaging.useServiceWorker(registration)
				initializePush()
			}).catch(
				err => {
					notificationBtn.removeClass('active')
					console.warn(`Service Worker record failed: ${err}`)
				}
			)
	} else {
		notificationBtn.removeClass('active')
	}

	function initializePush() {
		userToken = localStorage.getItem('pushToken')
		isSubscribed = userToken !== null
		updateBtn()
		notificationBtn.click(() => {
			notificationBtn.attr('disabled','disabled')
			if (isSubscribed) return unsubscribeUser()
    		return subscribeUser()
		}) 
	}

	function unsubscribeUser() {
		messaging.deleteToken(userToken)
	        .then(() => {
	            updateSubscriptionOnServer(userToken)
	            isSubscribed = false
	            userToken = null
	            localStorage.removeItem('pushToken')
	            notificationBtn.children()
					.removeClass('ion-android-notifications-off')
					.addClass('ion-android-notifications')
	            updateBtn()
	        })
	        .catch(err => console.warn('Error unsubscribing', err))
	}

	function subscribeUser() {
		messaging.requestPermission()
			.then(() => messaging.getToken())
			.then((token) => {
				updateSubscriptionOnServer(token)
				isSubscribed = true
				userToken = token
				localStorage.setItem('pushToken', token)
				notificationBtn.children()
					.removeClass('ion-android-notifications')
					.addClass('ion-android-notifications-off')
				updateBtn()
				let notification = new Notification('¡Bienvenido!',{
					body: 'Gracias por suscribirte te mantendremos informado', 
					icon: 'https://codeo.co/assets/img/icon_192x192.png'
				})
				notification()
			})
			.catch(err => {
				updateBtn()
				console.warn('Denied', err)
			})
	}

	function updateBtn() {
		if (Notification.permission === 'denied') return notificationBtn.removeAttr('disabled','disabled')
	}

	function updateSubscriptionOnServer(token) {

		if (isSubscribed) {
    		return db.ref('device_ids')
    			.equalTo(token)
    			.on('value', snapshot => snapshot.ref.remove())
		}

		db.ref('device_ids').once('value')
			.then(snapshots => {
				let deviceExists = false
				snapshots.forEach(childSnapshot => {
					if (childSnapshot.val() === token) {
                		deviceExists = true
                		return console.log('Device already registered.')
            		}
				})
				if (!deviceExists) {
					console.log('Device subscribed')
            		return db.ref('device_ids').push(token)
				}
			})
	}

	(function() {
		messaging.onMessage(function(payload) {
			console.log('Message received. ', payload)
			let notification = new Notification(payload.notification.title,{
				body: payload.notification.body, 
				icon: 'https://codeo.co/assets/img/icon_192x192.png',
				data: {url: payload.notification.click_action}
			})
		})
	})()
}

module.exports = Notificactions
