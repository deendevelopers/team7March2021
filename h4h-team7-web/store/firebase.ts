// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


export function getFirebaseApp() {
  if (firebase.apps.length > 0) return firebase.app();

  const config = {
    apiKey: "AIzaSyBc8RmG5RN5FoCqRgyUNIQQK4rH8VtQfTU",
    authDomain: "h4h-team-7.firebaseapp.com",
    projectId: "h4h-team-7",
    storageBucket: "h4h-team-7.appspot.com",
    messagingSenderId: "852248027493",
    appId: "1:852248027493:web:a3bf4e0b9c513af0e0018c",
    measurementId: "G-0YWXWX9S9C"
  };

 return firebase.initializeApp(config)
}

const firebaseApp = getFirebaseApp()
const auth = firebase.auth();

export { firebaseApp, auth };

// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     window.onSignInSubmit();
//   }
// });
