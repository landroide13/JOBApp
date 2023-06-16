// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX5egEiY-v1nMVR-N62Bv2pa8tdxL93Ug",
  authDomain: "job-board-app-b0be8.firebaseapp.com",
  projectId: "job-board-app-b0be8",
  storageBucket: "job-board-app-b0be8.appspot.com",
  messagingSenderId: "294498858281",
  appId: "1:294498858281:web:2b1cdb0b035b93d9cbf338"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth();
//const auth = getAuth(app);

export { auth }


