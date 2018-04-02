importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
	messagingSenderId: '110595395182'
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
	console.log('[sw.js] Received background message ', payload)
})

self.addEventListener('notificationclick', function(event) {  
	console.log('On notification click: ', event)
	event.notification.close()
	event.waitUntil(
		clients.matchAll({  
      		type: 'window' 
    	}).then(function(clientList) {
    		for ( let i = 0; i < clientList.length; i++) { 
    			let client = clientList[i]
    			if (client.url == '/' && 'focus' in client) {
    				return client.focus()
    			}
    		} 
    		if (clients.openWindow) {
    			return clients.openWindow('https://codeo.co/')  
    		}
    	})  
	)
})
