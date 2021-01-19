import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGwMsh6QzHaqD958RNdUaXGo-7kwlntsg",
    authDomain: "clone-bc833.firebaseapp.com",
    projectId: "clone-bc833",
    storageBucket: "clone-bc833.appspot.com",
    messagingSenderId: "788689710176",
    appId: "1:788689710176:web:a2166d3f32eded0b39e705",
    measurementId: "G-F48YSDBRCY"
})

const auth = firebase.auth();

export { auth };