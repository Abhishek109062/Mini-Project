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
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

//-- --variables-//
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');


//--- --VALIDATION---//
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function Validation() {
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let userregex = /^[a-zA-Z0-9]{5,}$/;

    if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(username.value) ||
        isEmptyOrSpaces(pass.value)) {
        alert("you cannot left any field empty");
        return false;
    }


    if (!nameregex.test(name.value)) {
        alert("the name should only contain alphabets!");
        return false;
    }
    if (!emailregex.test(email.value)) {
        alert("enter a valid email");
        return false;
    }
    if (!userregex.test(username.value)) {
        alert("-username can only be alphanumeric\n-username must be aleast 5 characters\n-username cannot contain spaces");
        return false;
    }

    return true;
}

//-- -REGISTER USER TO FIREBASE
function RegisterUser() {

    if (!Validation()) {
        return;
    }
    const dbRef = ref(db);
    get(child(dbRef, "UsersList/" + username.value)).then((snapshot) => {
        if (snapshot.exists()) {
            alert("Account Already Exist!");
        }
        else {
            set(ref(db, "UsersList/" + username.value),
                {
                    fullname: name.value,
                    email: email.value,
                    username: username.value,
                    password: pass.value
                })
                .then(() => {
                    alert("user added successfully");
                })
                .catch((error) => {
                    alert("error" + error);
                    I
                })
        }
    });
}

//-- -ASSIGN THE EVENTS- //

submit.addEventListener('click', RegisterUser);