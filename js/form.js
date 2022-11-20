import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// import { getAuth,  } from


const firebaseConfig = {
  apiKey: "AIzaSyBvJks5M5v8AP2H4stR0AHYPs_yY2fIHdo",
  authDomain: "mini-project-769ad.firebaseapp.com",
  projectId: "mini-project-769ad",
  storageBucket: "mini-project-769ad.appspot.com",
  messagingSenderId: "212922252229",
  appId: "1:212922252229:web:29ad548d846767651da9ac"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

document.getElementById('reg-btn').addEventListener('click', function () {
  document.getElementById('register-div').style.display = "inline";
  document.getElementById('login-div').style.display = "none";
});


document.getElementById("log-btn").addEventListener('click', function () {
  document.getElementById("register-div").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});


document.getElementById("go-home").addEventListener('click', function () {
  window.location.href = "./index.html";
});

document.getElementById("login-btn").addEventListener('click', function () {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("login-div").style.display = "none";
      document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;
    });
});


document.getElementById("register-btn").addEventListener('click', function () {
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML = "Welcome <br>" + registerEmail + " was Registered Successfully";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML = "Sorry ! <br>" + errorMessage;
    });
});


document.getElementById("google").addEventListener('click', function() {
  // signInWithRedirect(auth, provider);
  
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "./index.html";
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});

document.getElementById("log-out-btn").addEventListener('click', function () {
  document.getElementById("result-box").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});


// document.getElementById("log-out-btn").addEventListener('click', function(){
//   signOut(auth)
//   .then(() => {
//   document.getElementById("result-box").style.display="none";
//   document.getElementById("login-div").style.display="inline";
//   })
//   .catch((error) =>{
//   document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
//   });
// });