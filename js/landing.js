window.addEventListener("load", addHandlers, false);

function addHandlers(){
	var loader = document.getElementById("loader");
	
	loader.style.opacity = "0";
	
	//Use delay so that you can see the fade before the loader is destroyed, KAPOW!
	var delay=500;//1 seconds
    setTimeout(function(){
		loader.style.display = "none";
    },delay);
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	var body = document.getElementById("body");
	if(!body){
		return;
	}
	body.style.width = width + "px";
	body.style.height = height + "px";

	var imgOne = document.getElementById("image-one");
	var imgTwo = document.getElementById("image-two");
	var imgThree = document.getElementById("image-three");

	imgOne.style.width = Math.floor(width/6) + "px";
	imgTwo.style.width = Math.floor(width/6) + "px";
	imgThree.style.width = Math.floor(width/6) + "px";

	imgOne.style.height = Math.floor(width/3) + "px";
	imgTwo.style.height = Math.floor(width/3) + "px";
	imgThree.style.height = Math.floor(width/3) + "px";

	if(height>width){

		imgOne.style.width = Math.floor(width*0.7) + "px";
		imgTwo.style.width = Math.floor(width*0.7) + "px";
		imgThree.style.width = Math.floor(width*0.7) + "px";

		imgOne.style.height = Math.floor(width*0.25) + "px";
		imgTwo.style.height = Math.floor(width*0.25) + "px";
		imgThree.style.height = Math.floor(width*0.25) + "px";

	}

	window.onresize = getNewScreenSize;
}

//FUNCTION TO HANDLE CHANGES IN WINDOW SIZE
function getNewScreenSize(){
	
	//REINITIALIZE PROPERTIES SINCE THEY HAVE CHANGED
	width = window.innerWidth;
	height = window.innerHeight;

	var imgOne = document.getElementById("image-one");
	var imgTwo = document.getElementById("image-two");
	var imgThree = document.getElementById("image-three");

	body.style.width = width + "px";
	body.style.height = height + "px";

	imgOne.style.width = Math.floor(width/6) + "px";
	imgTwo.style.width = Math.floor(width/6) + "px";
	imgThree.style.width = Math.floor(width/6) + "px";

	imgOne.style.height = Math.floor(width/3) + "px";
	imgTwo.style.height = Math.floor(width/3) + "px";
	imgThree.style.height = Math.floor(width/3) + "px";


	if(height>width){
		imgOne.style.width = Math.floor(width*0.7) + "px";
		imgTwo.style.width = Math.floor(width*0.7) + "px";
		imgThree.style.width = Math.floor(width*0.7) + "px";

		imgOne.style.height = Math.floor(width*0.25) + "px";
		imgTwo.style.height = Math.floor(width*0.25) + "px";
		imgThree.style.height = Math.floor(width*0.25) + "px";
	}
}