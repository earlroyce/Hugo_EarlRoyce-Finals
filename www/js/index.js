// Original app initialization from default Cordova template
// Modified to initialize my buttons and functions
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

/* Local Storage to Control Welcome Alert */

var firstRun;
var subscription;

// This alert will only appear once
window.onload = function () {
    if (localStorage.getItem("firstRun") === null) {
		//localStorage.setItem("subscription", true);
		alert("Thanks for installing my app. You are subscribed to receive push notifications. You can opt out by clicking on the Push Notification button.");
        localStorage.setItem("firstRun", true);
    }
}

/* Required initialization for OneSignal */

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("ONESIGNALAPI")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);
