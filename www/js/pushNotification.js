/*
 * Script for OneSignal Push Notification
 * References: OneSignal Documentation
 * by Earl Royce Hugo
 */
var subscription;

 function pushNotification() {
		
	var notSubscribed = "You are not subscribed to Push Notifications. Click OK to Subscribe";
	var yesSubscribed = "You are already subscribed. Click Cancel to Unsubscribe."
	
	if (!subscription) {
		if (confirm(notSubscribed)) {
			subscription = true;
			window.alert("Thanks for subscribing.");
		} else {
			subscription = false;
		}
	} else {
		if (confirm(yesSubscribed)) {
			subscription = true;
			window.alert("Thanks. You will continue to receive Push Notifications.");
		} else {
			subscription = false;
			window.alert("You have unsubscribed and will stop receiving Push Notifications.");
		}
		
	}
	 
	console.log("Subscription status is",subscription);
	
	// window.plugins.OneSignal.provideUserConsent(subscription);
	window.plugins.OneSignal.setSubscription(subscription);
 }