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
			} else if (goWhich == "right" && currentSlideVal == 5) {// return to cell 1 from 5
				var newSlide = (currentSlide.slice(0, -1)) + (1);
			} else if (goWhich =="left" && currentSlideVal > 1) { //go left
				var newSlide = (currentSlide.slice(0, -1)) + (currentSlideVal -1);
			} else if (goWhich == "left" && currentSlideVal == 1) {// go to cell 5 from 1
				var newSlide = (currentSlide.slice(0, -1)) + (5);
				timer = -2;
			} 
		}
	}
	if (newSlide) { //applies changes
		currentSlide.checked = false;
		document.getElementById(newSlide).checked = true;
	}
}

window.onload = function() {//resets timer after manual input from user (clicking on any <label> tags)
	for (var x=0; x<labels.length; x++) { //goes through all items with tag 'label'
		labels[x].onmouseup = function(){
			timer = -3;
			console.log("timer reset");
		}
	}
}

// TASK: bring back the arrows on slides one and five
