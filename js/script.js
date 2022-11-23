

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

