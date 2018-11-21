/*
 * Script for Extra - Designed for Helper Functions
 * 
 * by Earl Royce Hugo
 */

var extra = {
		
	refresh: function () {
	
		// Cancel vibrate if running
		navigator.vibrate(0);
		this.cancelTimeOut(timeoutVar);
		
		document.getElementById("displayResult").innerHTML = "...";
		document.getElementById("mainTable").style.display = "table";

	},

	cancelTimeOut: function (timeoutVar) {
		clearTimeout(timeoutVar);
	}
	
}
