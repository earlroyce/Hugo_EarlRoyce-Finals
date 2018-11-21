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

// Required script for OneSignal

// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("b026acb3-9788-477f-91c6-b1a23ff9e805")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);