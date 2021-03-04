import firebase from 'firebase'

const firebaseApp = firebase.initializeApp (

    {
        apiKey: "AIzaSyBwnEHSpIDmxZ3aJolrgMUC0kCArA4ABY4",
        authDomain: "messenger-clone-544b3.firebaseapp.com",
        projectId: "messenger-clone-544b3",
        storageBucket: "messenger-clone-544b3.appspot.com",
        messagingSenderId: "79526589582",
        appId: "1:79526589582:web:98c07f1b20c268ebdd45df",
        measurementId: "G-M1XS0W1V3V"
      }
    
)

const db = firebaseApp.firestore();

export default db;