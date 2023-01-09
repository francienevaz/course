// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg7YOyhuc34rrXMsSeKO0uNdNe4KQ18Wc",
  authDomain: "colegio-aae0b.firebaseapp.com",
  projectId: "colegio-aae0b",
  storageBucket: "colegio-aae0b.appspot.com",
  messagingSenderId: "355253594913",
  appId: "1:355253594913:web:4f556f15e068f37244ec60",
  measurementId: "G-KPJ1RF9NW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
}



