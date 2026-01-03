import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAk467rhoIcMQk6X0G85GRyjiYKVNXCG5Q",
  authDomain: "social-b1f9a.firebaseapp.com",
  projectId: "social-b1f9a",
  storageBucket: "social-b1f9a.firebasestorage.app",
  messagingSenderId: "82038776502",
  appId: "1:82038776502:web:1c34996998ad872b067c17",
  measurementId: "G-ZXLBM514MT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

// Request notification permission and get token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BHrRE2OfquO408Y_pDWXv0Muutd6vjZ7dEa5jcwo5PTen4GKiCjssR7TnEnm5Y7Mriuhd1Jgb9W0fHuK7XjTzXA' // You'll need to add your VAPID key
      });
      console.log('FCM token:', token);
      return token;
    } else {
      console.log('Notification permission denied');
      return null;
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    return null;
  }
};

export const onForegroundMessage = (callback) => {
  return onMessage(messaging, callback);
};
