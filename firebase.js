import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxHW24T7AAU3Y7r6IuN7UD9Ls5XzZa3D8",
  authDomain: "citytransport-4d257.firebaseapp.com",
  projectId: "citytransport-4d257",
  storageBucket: "citytransport-4d257.firebasestorage.app",
  messagingSenderId: "147320456860",
  appId: "1:147320456860:web:3a3992c4fa43ca66510f59",
  measurementId: "G-4B823NY2S4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getStops() {
  const snapshot = await getDocs(collection(db, "stops"));

  return snapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  }));
}
