/*
 * Script for Sending SMS
 * References: cordova.sms-plugin
 * by Earl Royce Hugo
 */

//Send SMS 
var send = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value.toString();
        var message = document.getElementById('messageTxt').value;
        // console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        var success = function() {
			alert('Message sent successfully');
			document.getElementByID("displayResult").innerHTML = "Message sent successfully.";
			document.getElementById("smsForm").reset();				
		};
        
		var error = function (e) { alert('Message Failed:' + e); };
        
		sms.send(number, message, options, success, error);
    }
};

// SMS Modal Window

function modalSMS() {
	
	// Cancel vibrate if running
	navigator.vibrate(0);
	extra.cancelTimeOut(timeoutVar);

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("sendSMS");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	modal.style.display = "block";

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		
		if (document.getElementById("messageTxt").value != "") {
		
			if (confirm("This will clear unsent messages. Continue?")) {
				document.getElementById("smsForm").reset();	
				modal.style.display = "none";
			}
		} else {
			document.getElementById("smsForm").reset();	
			modal.style.display = "none";
		}

	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}