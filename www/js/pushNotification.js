/*
 * Script for OneSignal Push Notification
 * References: OneSignal Documentation
 * by Earl Royce Hugo
 */



function pushNotification() {
	
	//Clear Main Display
	extra.refresh();
	
	
	var notSubscribed = "You are not subscribed to receive Push Notifications. Click OK to Subscribe.";
	var yesSubscribed = "You are subscribed to receive Push Notifications. Click Cancel to Unsubscribe."
	
	var subscriptionStatus  = localStorage.getItem("subscription");
	
	//console.log("subscriptionStatus is ",subscriptionStatus);
	if (subscriptionStatus == "false") {
		if (confirm(notSubscribed)) {
			//subscription = true;
			localStorage.setItem("subscription", true);
			window.alert("Thanks for subscribing. You will start receiving Push Notifications.");
		} else {
			//subscription = false;
			localStorage.setItem("subscription", false);
		}
	} else {
		if (confirm(yesSubscribed)) {
			//subscription = true;
			localStorage.setItem("subscription", true);
			window.alert("Thanks. You will continue to receive Push Notifications.");
		} else {
			//subscription = false;
			localStorage.setItem("subscription", false);
			window.alert("You have unsubscribed and will stop receiving Push Notifications. To resubscribe, click on Push Notifications again.");
		}
		
	}
	
	//console.log("Subscription status is", localStorage.getItem("subscription"));
	subscriptionStatus  = localStorage.getItem("subscriptionStatus");
	
	window.plugins.OneSignal.setSubscription(subscription);
 }