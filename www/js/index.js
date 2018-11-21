// Original app initialization from default Cordova template
// Modified to initialize my buttons and functions
 
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
		document.getElementById("battButton").addEventListener("click", battStat);
		document.getElementById("locationButton").addEventListener("click", geoLocation);
		document.getElementById("vibrateButton").addEventListener("click", vibratePhone);
		document.getElementById("cameraButton").addEventListener("click", takePhoto);
		

    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
		  
};

app.initialize();