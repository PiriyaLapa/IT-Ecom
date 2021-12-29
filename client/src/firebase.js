import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJzOFqD1ejESVJkmIvhWEoBNhpqMW5Rd0',
  authDomain: 'it-ecommerce-418a2.firebaseapp.com',
  projectId: 'it-ecommerce-418a2',
  storageBucket: 'it-ecommerce-418a2.appspot.com',
  messagingSenderId: '594823441790',
  appId: '1:594823441790:web:ffd16c07b8b2b831d3172f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
