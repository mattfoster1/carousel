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

document.onkeydown = function(event) {
	var controls = document.getElementsByName("controls");

	for (x=0; x < controls.length; x++) {
		// console.log(controls[x].checked);
		if (controls[x].checked == true) {
			currentSlide = controls[x].id;
			var currentSlideVal = parseInt(currentSlide.replace ( /[^\d.]/g, '' )); //get numeric value of ID
			// console.log(currentSlide);

			if (event.keyCode == 39 && currentSlideVal < 5) { //go right
				var newSlide = (currentSlide.slice(0, -1)) + (currentSlideVal + 1);
				console.log(currentSlide + ", " + newSlide);

			} else if (event.keyCode == 37 && currentSlideVal > 1) { //go left
				var newSlide = (currentSlide.slice(0, -1)) + (currentSlideVal -1);
				console.log(currentSlide + ", " + newSlide);
			}
		}
	}
	currentSlide.checked = false;
	document.getElementById(newSlide).checked = true;
};