// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  apiKey: 'AIzaSyCbgW_NyW6R1Ys9_DTMGrAsla-kuse0nU8',
  authDomain: 'turnero002-c11e2.firebaseapp.com',
  databaseURL: 'https://turnero002-c11e2.firebaseio.com',
  projectId: 'turnero002-c11e2',
  storageBucket: 'turnero002-c11e2.appspot.com',
  messagingSenderId: '737807924237'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();