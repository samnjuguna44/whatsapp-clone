import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNbpkHMA7tzaFopoPyUr7raMaWmvKNFWY",
  authDomain: "whatsapp-clone-e5714.firebaseapp.com",
  projectId: "whatsapp-clone-e5714",
  storageBucket: "whatsapp-clone-e5714.appspot.com",
  messagingSenderId: "840647042171",
  appId: "1:840647042171:web:8f52a06ab5ab7fd488aede",
};

//because of SSR we don't want to reinitialize the app thus the below ternary expression
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

// Access to database, authentication and the provider  
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
