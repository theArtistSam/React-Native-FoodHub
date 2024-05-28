// firebaseConfig.js
import {firebase} from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWrSzSHGY_OWOAexaNmi60QWjlM8TIimM',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'foodhub-94fbf',
  storageBucket: 'foodhub-94fbf.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: '1:552525838655:android:061c9bfeb62c22fe7e7b8a',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export {db};
