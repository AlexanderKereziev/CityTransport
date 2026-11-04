// Firebase SDK imports (version 13.1.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxHW24T7AAU3Y7r6IuN7UD9Ls5XzZa3D8",
    authDomain: "citytransport-4d257.firebaseapp.com",
    projectId: "citytransport-4d257",
    storageBucket: "citytransport-4d257.firebasestorage.app",
    messagingSenderId: "147320456860",
    appId: "1:320456860:web:3a3992c4fa43ca66510f59",
    measurementId: "G-4B823NY2S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);


// ==========================================
// RETRIEVE ALL STOPS
// ==========================================
export async function getStops() {
    const snapshot = await getDocs(collection(db, "stops"));

    return snapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
}


// ==========================================
// RETRIEVE ALL TRANSPORT LINES
// ==========================================
export async function getLines() {
    const snapshot = await getDocs(collection(db, "lines"));

    return snapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
}


// ==========================================
// RETRIEVE ALL SCHEDULES
// ==========================================
export async function getSchedules() {
    const snapshot = await getDocs(collection(db, "schedules"));

    return snapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
}


// ==========================================
// RETRIEVE ALL CONTACTS
// ==========================================
export async function getContacts() {
    const snapshot = await getDocs(collection(db, "contacts"));

    return snapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
}


// ==========================================
// SUBMIT CONTACT MESSAGE
// ==========================================
export async function sendContactMessage(data) {
    return await addDoc(collection(db, "contacts"), {
        fullName: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
        createdAt: serverTimestamp()
    });
}