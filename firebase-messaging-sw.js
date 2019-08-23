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

messaging.setBackgroundMessageHandler(payload => {
  const jTurn = payload['data']['data'];
  const aTurn = JSON.parse(jTurn);
  img : string = '';

  console.log('Event ',aTurn.event);
  clients.matchAll({includeUncontrolled: true, type: 'window'}).then(clients => {
    clients.forEach(client => {
      client.postMessage({'cmd': 'turn','data': jTurn});
    })
  });

  switch(aTurn.event) {
    case 'A':
      img = 'assets/images/turn.png'
      aTurn.status_string = 'Atendiendo...';
      break;
    case 'C':
      img = 'assets/images/turn.png'
      aTurn.status_string = 'Llamado...';  
      break;
    case 'I':
      img = 'assets/images/message.png';
      break;
    case 'K':
      img = 'assets/images/turn.png'
      aTurn.status_string = 'Penalizado...';
      break;
    case 'P':
      img = 'assets/images/turn.png'
      aTurn.status_string = 'Pausado...';  
      break;
    case 'Q':
      img = 'assets/images/shopping.png';
      break;
    case 'S':
      img = 'assets/images/turn.png'
      aTurn.status_string = 'En espera...';
      break;
    default:
      return false;
    
  }

  const title = aTurn.server_title;
  const options = {
    body: aTurn.status_string || '...',
    icon: payload.data.icon,
    // image: img,
    vibrate: [100, 50, 100],
  }

  return self.registration.showNotification(title, options);
  // var myNotification = new Notification(title, options);
});

/*
self.addEventListener('notificationclick', function(e) {
  e.notification.close();

  // Do something as the result of the notification click
  const myPromise = new Promise(function(resolve, reject) {
    // Do you work here

    // Once finished, call resolve() or  reject().
    resolve();
  });

  event.waitUntil(myPromise);
});
*/