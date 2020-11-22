import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA22sZ4hLm0hrVHGKcz2RtWbkDxQte-xSI",
    authDomain: "manufac-8a6f0.firebaseapp.com",
    databaseURL: "https://manufac-8a6f0.firebaseio.com",
    projectId: "manufac-8a6f0",
    storageBucket: "manufac-8a6f0.appspot.com",
    messagingSenderId: "847698346680",
    appId: "1:847698346680:web:b777ff66a5cd4d2b466a4d",
    measurementId: "G-HEEVREKG44"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };