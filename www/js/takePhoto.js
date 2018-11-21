/*
 * Script for Taking Photos
 * References: cordova-plugin-camera
 * by Earl Royce Hugo
 */

function takePhoto () {
	// Cancel vibrate if needed
	navigator.vibrate(0);
	extra.cancelTimeOut(timeoutVar);
	
	alert("Note: Photos are saved in the Pictures folder.");
	
	navigator.camera.getPicture(onSuccess, onFail, {
		quality: 100,
		destinationType: Camera.DestinationType.FILE_URI,
		encodingType: Camera.EncodingType.JPEG,
		saveToPhotoAlbum: true, // Errors in PhoneGap Developer but works when installed via APK
		correctOrientation: true,
		targetHeight: 500,
		targetWidth: 500
		}
	);

}

function onSuccess(imageURI) {
	var image = document.getElementById('myImage');
		image.src = imageURI;

	viewPhoto = "View Captured Photo";
	viewPhotoLink = viewPhoto.link(image.src);
	photoMessage = "Image saved to Pictures folder.<br><br>" + viewPhotoLink;

	document.getElementById("displayResult").innerHTML = photoMessage;

}

function onFail(message) {
	alert('Failed because: ' + message);
}