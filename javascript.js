
const datefunc = document.getElementById("date");

function newdate(){
var d = new Date();
return (d.getDate() +"/" + d.getMonth() + "/" + d.getFullYear());
}



datefunc.innerText = newdate(); 