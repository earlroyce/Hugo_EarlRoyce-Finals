/*
 * Script for OneSignal Push Notification
 * References: OneSignal Documentation
 * by Earl Royce Hugo
 */

window.plugins.OneSignal.setSubscription(false);
var subscribed;
//var subscription = storage.getItem(subscribed);

function pushNotification() {
	
	var subscription = storage.getItem(subscribed);
	
	var notSubscribed = "You are not subscribed to receive Push Notifications. Click OK to Subscribe.";
	var yesSubscribed = "You are subscribed to receive Push Notifications. Click Cancel to Unsubscribe."
	
	if (!subscription) {
		if (confirm(notSubscribed)) {
			storage.setItem(subscribed, true);
			//window.plugins.OneSignal.provideUserConsent(true);
			window.alert("Thanks for subscribing. You will start receiving Push Notifications.");
		} else {
			storage.setItem(subscribed, false);
		}
	} else {
		if (confirm(yesSubscribed)) {
			storage.setItem(subscribed, true);
			window.alert("Thanks. You will continue to receive Push Notifications.");
		} else {
			storage.setItem(subscribed, false);
			window.alert("You have unsubscribed and will stop receiving Push Notifications.");
		}
		
	}
	 
	//console.log("Subscription status is",subscription);
	
	// window.plugins.OneSignal.provideUserConsent(subscription);
	window.plugins.OneSignal.setSubscription(subscription);
 }