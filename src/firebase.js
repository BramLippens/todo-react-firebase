import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCft0nXgAfOlWFIO961RXDYLMR46BRmVmk',
  authDomain: 'todo-react-firebase-82633.firebaseapp.com',
  projectId: 'todo-react-firebase-82633',
  storageBucket: 'todo-react-firebase-82633.appspot.com',
  messagingSenderId: '343575491487',
  appId: '1:343575491487:web:fad6e6df5c8ba429f8c3aa',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();

export { db };
