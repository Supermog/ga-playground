import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAXHvNgdllHKs_CCrbchcXl_I1GZb0TmhM',
  authDomain: 'ga-playground-a16c4.firebaseapp.com',
  projectId: 'ga-playground-a16c4',
  storageBucket: 'ga-playground-a16c4.appspot.com',
  messagingSenderId: '127129294136',
  appId: '1:127129294136:web:e7d657729ad956f8021dcd',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
