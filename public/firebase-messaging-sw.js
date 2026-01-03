// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js"
);

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAk467rhoIcMQk6X0G85GRyjiYKVNXCG5Q",
  authDomain: "social-b1f9a.firebaseapp.com",
  projectId: "social-b1f9a",
  storageBucket: "social-b1f9a.firebasestorage.app",
  messagingSenderId: "82038776502",
  appId: "1:82038776502:web:1c34996998ad872b067c17",
  measurementId: "G-ZXLBM514MT"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Background push notifications
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification?.title || "Background Message";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: "/icons/icon-192x192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
