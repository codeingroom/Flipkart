console.log("hello bhanu");
var button=document.getElementById("btn");
var menu=document.getElementById("dpmenu");


button.addEventListener("mousemove",droupmenu);
menu.addEventListener("mousemove",droupmenu);
function droupmenu(){
	console.log("Work");
	menu.style.display = "block";
}

//button.addEventListener("mouseout",end);
menu.addEventListener("mouseout",end);
function end(){
	console.log("end");
	menu.style.display = "none";
}

