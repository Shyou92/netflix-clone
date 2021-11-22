import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD0LWXDu6pk3YHyTGp4j02PKwPtrEEdd0E',
  authDomain: 'netflix-clone-5f802.firebaseapp.com',
  projectId: 'netflix-clone-5f802',
  storageBucket: 'netflix-clone-5f802.appspot.com',
  messagingSenderId: '756097073198',
  appId: '1:756097073198:web:200ae91fb1f469cc449fbf',
  measurementId: 'G-RFEF60KS52',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
