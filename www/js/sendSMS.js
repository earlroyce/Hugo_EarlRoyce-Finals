/*
 * Script for Sending SMS
 * References: 
 * by Earl Royce Hugo
 */

//Open SMS Page
function openSMS() {
	// var timeoutVar;
	
	// Cancel vibrate if running
	navigator.vibrate(0);
	extra.cancelTimeOut(timeoutVar);
	
	window.location = "pages/sms.html";
}

//Send SMS 
var send = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value.toString();
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        var success = function() { alert('Message sent successfully'); };
        
		var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};

function modalSMS() {

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("sendSMS");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}