# Finals CMSC 202 - App with Six Functions
# by Earl Royce Hugo

I created this app in fulfillment of our midterms and final projects. I am a beginner, so please be gentle. :)


## Functions And A Little Back Story

For our midterms, we were required to create an app with four functions at the click of the button:

	1. Show Battery Status
	2. Show Geo Location
	3. Vibrate Phone
	4. Click and Save Photo
	
I initially based my development from the PhoneGap Hello World template, replacing various components as I went.

As a new student, all I really knew was basic HTML and a general understanding of JavaScript (up to the point of our main textbook by the middle of the semester).

For this project, I mostly referenced https://www.w3.org and https://www.w3schools.com .

It was pretty straightforward until I got to number 4: Click and Save Photo. It was only then did I discover the phonegap plugins, which were happily part of the PhoneGap Hello World template.

So with that, only number 4 initially used plugin, although I found out that all of these requirements were already represented by a plugin.


For the finals, we were required to add two more functions:

	5. Send SMS
	6. Push Notifications via OneSignal

## Plugin All The Way

### Midterms
After converting to APK, only 1 of the functions was working (namely, the battery status), so I restarted my app and went plugin all the way, installing them through cordova cli.

The specific plugins I used used are the following:

    1. cordova-plugin-whitelist
    2. cordova-plugin-camera
    3. cordova-plugin-battery-status
    4. cordova-plugin-geolocation
    5. cordova-plugin-vibration
	
### Finals
For the finals, I added the following plugins:

	6. cordova-sms-plugin
	7. onesignal-cordova-plugin
	
## Manual changes to config.xml

### Midterms
When converted to apk via PhoneGap build, my install does not ask for permissions and my Camera and Geolocations functions do not work.

To address this, I added <feature> lines as suggested onlilne (although they were mentioned to be deprecated):

	<feature name="http://api.phonegap.com/1.0/camera" />
    <feature name="http://api.phonegap.com/1.0/file" />
    <feature name="http://api.phonegap.com/1.0/geolocation" />

	
And then my app started working. (The camera does not work when tested by PhoneGap Developer on my Android.)

### Finals
Following the instructions on the OneSignal documentation, I added the following to config.xml:

	<preference name="phonegap-version" value="cli-8.0.0" />
	<preference name="android-build-tool" value="gradle" />
	<preference name="android-minSdkVersion" value="16" />
	

## Structure

My folder structure for the Midterms used the Legacy Project Structure. For some reason, my build fails when I use the CLI Project Structure.

For the Finals, I was able to build following the CLI Project Structure as seen here.