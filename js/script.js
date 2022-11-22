// //-- -----REFERENCES-- //
// let userlink = document.getElementById('userlink');
// let signoutlink = document.getElementById('signoutlink');
// var currentUser = null;



// //-- --Functions --- -//
// function getUsername() {
//     let keepLoggedIn = localStorage.getItem("keepLoggedIn");
//     if (keepLoggedIn == "yes") {
//         currentUser = JSON.parse(localStorage.getItem('user'));
//     }
//     else {
//         currentUser = JSON.parse(sessionStorage.getItem('user'));
//     }
// }
// function Signout() {
//     sessionStorage.removeItem('user');
//     localStorage.removeItem('user');
//     localStorage.removeItem('keepLoggedIn');
//     window.location = "./index.html";
// }


// //-- -WINDOWS LOADS
// window.onload = function() {
//     getUsername();
//     if (currentUser == null) {
//         userlink.innerText = "Create New Account";
//         userlink.classList.replace("nav-link","btn");
//         userlink.classList.add("btn-primary");
//         userlink.href = "register.html";
//         signoutlink.innerText = "Login";
//         signoutlink.classList.replace("nav-link","btn");
//         signoutlink.classList.add("btn-success");
//         signoutlink.href = "./login.html";
//     }
//     else {
//         userlink.innerText = currentUser.username;
//         userlink.classList.replace("btn", "nav-link");
//         userlink.classList.remove("btn-primary");
//         userlink.href = "#";
//         signoutlink.innerText = "Sign Out";
//         signoutlink.classList.replace("btn","nav-link");
//         signoutlink.classList.remove("btn-success");
//         signoutlink.href = "javascript:Signout()";
//     }
//     I
// }

// signoutlink.addEventListener('click', Signout);

// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled"); 
        document.getElementById("navvvv").style.backgroundColor = "white";
    }else{
        nav.classList.remove("header-scrolled");
        document.getElementById("navvvv").style.backgroundColor = "transparent";
    
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 6, 3000);
    counter("count2", 0, 20, 0, 3000);
    counter("count3", 0, 2000, 3)
    counter("count4", 0, 500, 3000);
 });