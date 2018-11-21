/*
 * Script for GeoLocation
 * References: w3schools, cordova-plugin-geolocation
 * by Earl Royce Hugo
 */

function geoLocation() {
	// Cancel vibrate if running
	navigator.vibrate(0);
	extra.cancelTimeOut(timeoutVar);
	
	alert("Please turn on mobile data or Wi-Fi for better results.")
		
	document.getElementById("displayResult").innerHTML = "Locating. Please wait."
		
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(display, errorMessage, { enableHighAccuracy: true });
		
	} else { 
		document.getElementById("displayResult").innerHTML = "Geolocation is not supported.";
	}

	function display(position) {
		document.getElementById("displayResult").innerHTML = "Latitude: " +
		position.coords.latitude + 
			"<br>Longitude: " + position.coords.longitude;
				
		/*
		//Open in Maps if with Google Key
		var latlon = position.coords.latitude + "," + position.coords.longitude;
		
		var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
		+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_:KEY";

		document.getElementById("mainDisplay").innerHTML = "<img src='"+img_url+"'>";
		*/
				
	}

	function errorMessage (error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				document.getElementById("displayResult").innerHTML = "User denied the request for Geolocation."
				break;
			case error.POSITION_UNAVAILABLE:
				document.getElementById("displayResult").innerHTML = "Location information is unavailable."
				break;
			case error.TIMEOUT:
				document.getElementById("displayResult").innerHTML = "The request to get user location timed out."
				break;
			case error.UNKNOWN_ERROR:
				document.getElementById("displayResult").innerHTML = "An unknown error occurred."
				break;
		}
	}
	
}