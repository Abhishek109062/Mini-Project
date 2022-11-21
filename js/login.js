//------- ------FIREBASE CONFIG-- - ------//
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyBvJks5M5v8AP2H4stR0AHYPs_yY2fIHdo",
    authDomain: "mini-project-769ad.firebaseapp.com",
    databaseURL: "https://mini-project-769ad-default-rtdb.firebaseio.com",
    projectId: "mini-project-769ad",
    storageBucket: "mini-project-769ad.appspot.com",
    messagingSenderId: "212922252229",
    appId: "1:212922252229:web:29ad548d846767651da9ac"
};


const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set, child, get }
    from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

//-- --variables-//
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');
// alert(username.value+"dfjknsdkfsndlfkjsd");


//-- --Authenticate-- --//
function AuthenticateUser() {
    const dbRef = ref(db);
    get(child(dbRef, "UsersList/" + username.value)).then((snapshot)=>{
        if (snapshot.exists()) {
            let dpass = snapshot.val().password;
            if (dpass === pass.value) {
                login(snapshot.val());
            }
            else {
                alert("username or password is invalid");
            }
        }
        else {
            alert("user does not exist");
        }
    });
}


//-- -LOGIN-1/1
function login(user) {
    let keepLoggedIn = document.getElementById('customSwitch1').checked;
    if (!keepLoggedIn) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location = "./index.html";
        I
    }
    else {
        localStorage.setItem('keepLoggedIn', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location = "./index.html";
    }
}

submit.addEventListener('click', AuthenticateUser);