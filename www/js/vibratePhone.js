/*
 * Script for Vibrating Phone
 * References: https://www.w3.org, cordova-plugin-vibration
 * by Earl Royce Hugo
 */

// var vibratePhone = {	
//	start: function () {

var timeoutVar;

function vibratePhone() {
	// Vibrate EARL in Morse Code . .- .-. .-..
	navigator.vibrate([100,80,100,30,350,80,100,30,350,30,100,80,100,30,350,30,100,30,100]);
		
	document.getElementById("displayResult").innerHTML = ">>> Vibrating <<<";
		
	// Approximate total of my vibrate pattern to remove the display text
	timeoutVar = setTimeout(() => extra.refresh(), 2500);
//	}
}