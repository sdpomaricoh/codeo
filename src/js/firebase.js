import * as firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyBiIiTrUyNK6gdOxIL5cRkV1QbOjb625Ao',
	authDomain: 'codeo-1518926519718.firebaseapp.com',
	databaseURL: 'https://codeo-1518926519718.firebaseio.com',
	projectId: 'codeo-1518926519718',
	storageBucket: 'codeo-1518926519718.appspot.com',
	messagingSenderId: '110595395182'
}

firebase.initializeApp(config)

export const db = firebase.database()
export const messaging = firebase.messaging()
