
let signoutlink = document.getElementById('signoutlink');
var currentUser = null;



//-- --Functions --- -//
function getUsername() {
    let keepLoggedIn = localStorage.getItem("keepLoggedIn");
    if (keepLoggedIn == "yes") {
        currentUser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}
function Signout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('keepLoggedIn');
    window.location = "./index.html";
}


		
function Delete(e){
	let items = [];
	JSON.parse(localStorage.getItem('user')).map(data=>{
		if(data.id != e.parentElement.parentElement.children[0].textContent){
			
			items.push(data);

		}
	});
	localStorage.setItem('user',JSON.stringify(items));
	window.location.reload();
};


window.onload = function(){
	
	getUsername();
    if (currentUser == null) {
        userlink.innerText = "Create New Account";
        userlink.classList.replace("nav-link","btn");
        userlink.classList.add("btn-primary");
        userlink.href = "register.html";
        signoutlink.innerText = "Login";
        signoutlink.classList.replace("nav-link","btn");
        signoutlink.classList.add("btn-success");
        signoutlink.href = "./login.html";
    }
    else {
        userlink.innerText = currentUser.username;
        userlink.classList.replace("btn", "nav-link");
        userlink.classList.remove("btn-primary");
        userlink.href = "#";
        signoutlink.innerText = "Sign Out";
        signoutlink.classList.replace("btn","nav-link");
        signoutlink.classList.remove("btn-success");
        signoutlink.href = "javascript:Signout()";
    }

	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.close');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click",function(){

		cartBox.classList.remove('active');
	});


	// adding data to localstorage
	const attToCartBtn = document.getElementsByClassName('attToCart');
	let items = [];
	for(let i=0; i<attToCartBtn.length; i++){
		attToCartBtn[i].addEventListener("click",function(e){
			if(typeof(Storage) !== 'undefined'){
				let item = {
						id:i+1,
						name:e.target.parentElement.children[0].textContent,
						price:e.target.parentElement.children[1].children[0].textContent,
						no:1
					};
				if(JSON.parse(localStorage.getItem('user')) === null){
					items.push(item);
					localStorage.setItem("user",JSON.stringify(items));
					window.location.reload();
				}else{
					const localItems = JSON.parse(localStorage.getItem("user"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('user',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('local storage is not working on your browser');
			}
		});
	}
	// adding data to shopping cart 
	const iconShoppingP = document.querySelector('.iconShopping p');
	let no = 0;
	JSON.parse(localStorage.getItem('user')).map(data=>{
		no = no+data.no
;	});
	iconShoppingP.innerHTML = no;


	//adding cartbox data in table
	const cardBoxTable = cartBox.querySelector('table');
	let tableData = '';
	tableData += '<tr><th>Item Id</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>';
	if(JSON.parse(localStorage.getItem('user'))[0] === null){
		tableData += '<tr><td colspan="5">No items found</td></tr>'
	}else{
		JSON.parse(localStorage.getItem('user')).map(data=>{
		
			tableData += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>'+data.no+'</th><th>'+data.price+'</th><th><a href="#" onclick=Delete(this);>Delete</a></th></tr>';
		});
	}
	cardBoxTable.innerHTML = tableData;
}



signoutlink.addEventListener('click', Signout);   