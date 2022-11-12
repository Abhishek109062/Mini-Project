var n = document.getElementById("name");
var roll = document.getElementById("rollno");
var date = document.getElementById("date");

n.innerHTML = "Ankur Gupta";
roll.innerHTML = "201500103";

var day = new Date();
var dte = day.getDate();
var month = day.getMonth();
var year = day.getFullYear();

date.innerHTML = `${dte}-${month}-${year}`;