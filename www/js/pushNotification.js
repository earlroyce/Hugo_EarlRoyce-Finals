/*
 * Script for OneSignal Push Notification
 * References: OneSignal Documentation
 * by Earl Royce Hugo
 */

window.plugins.OneSignal.getPermissionSubscriptionState(function(status) {
  status.subscriptionStatus.subscribed; // Bool
  //status.subscriptionStatus.userSubscriptionSetting; // Bool
  status.subscriptionStatus.userId; // String: OneSignal Player ID
  status.subscriptionStatus.pushToken; // String: Device Identifier from FCM/APNs

	var subscription = status.subscriptionStatus.subscribed;
});

//var subscription = status.subscriptionStatus.subscribed;

//window.plugins.OneSignal.setSubscription(false);

//console.log (subscribed);

function pushNotification() {
	
	//var subscription = storage.getItem(subscribed);
	
	var notSubscribed = "You are not subscribed to receive Push Notifications. Click OK to Subscribe.";
	var yesSubscribed = "You are subscribed to receive Push Notifications. Click Cancel to Unsubscribe."
	
	if (!subscription) {
		if (confirm(notSubscribed)) {
			subscription = true;
			window.alert("Thanks for subscribing. You will start receiving Push Notifications.");
		} else {
			subscription = false;
		}
	} else {
		if (confirm(yesSubscribed)) {
			subscription = true;
			window.alert("Thanks. You will continue to receive Push Notifications.");
		} else {
			subscription = false
			window.alert("You have unsubscribed and will stop receiving Push Notifications.");
		}
		
	}
	 
	console.log("Subscription status is",subscription);
	
	window.plugins.OneSignal.setSubscription(subscription);
 }