// var mseD;
// var mseU;

// var click = function(f) {
// 	console.log("click");

// 	if (mseD && mseU) {

// 	}
// }

// document.onmousedown = function(event) {
// 	mseD = event.pageX;
// 	click();
// };

// document.onmouseup = function(event) {

// }

var currentSlide;
var timer = 2;
var controls = document.getElementsByName("controls");
var goWhich;

var label = [];
var labels = document.getElementsByTagName("label");

document.onkeydown = function(event) { //takes arrow key commands
	
	var newSlide = null;
	timer = 0;

	if (event.keyCode == 39) {
		goWhich = "right";
	} else if (event.keyCode == 37) {
		goWhich = "left";
	}

	move(goWhich);	
};


var timeout = setInterval(function(){ //moves slides along every 5 secs
	timer++;
	if (timer >= 5) {
		move("right");
		timer = 0;
	}
}, 1000)


var move = function(goWhich) {
	for (var x=0; x < controls.length; x++) {
		if (controls[x].checked == true) {
			currentSlide = controls[x].id;
			var currentSlideVal = parseInt(currentSlide.replace ( /[^\d.]/g, '' )); //get numeric value of ID
			if (goWhich == "right" && currentSlideVal < 5) { //go right
				var newSlide = (currentSlide.slice(0, -1)) + (currentSlideVal + 1);
			} else if (goWhich == "right" && currentSlideVal == 5) {
				var newSlide = (currentSlide.slice(0, -1)) + (1);
			} else if (goWhich =="left" && currentSlideVal > 1) { //go left
				var newSlide = (currentSlide.slice(0, -1)) + (currentSlideVal -1);
				// console.log(currentSlide + ", " + newSlide);
			} else if (goWhich == "left" && currentSlideVal == 1) {
				var newSlide = (currentSlide.slice(0, -1)) + (5);
				timer = -2;
			} 
		}
	}
	if (newSlide) {
		currentSlide.checked = false;
		document.getElementById(newSlide).checked = true;
	}
}

window.onload = function() {
	for (var x=0; x<labels.length; x++) { //goes through all items with tag 'label'
		labels[x].onmouseup = function(){
			timer = -1;
			console.log("timer reset");
		}
	}
}
