  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxHW24T7AAU3Y7r6IuN7UD9Ls5XzZa3D8",
    authDomain: "citytransport-4d257.firebaseapp.com",
    projectId: "citytransport-4d257",
    storageBucket: "citytransport-4d257.firebasestorage.app",
    messagingSenderId: "147320456860",
    appId: "1:147320456860:web:3a3992c4fa43ca66510f59",
    measurementId: "G-4B823NY2S4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);