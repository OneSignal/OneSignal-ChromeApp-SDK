function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "b2f7f966-d8cc-11e4-bed1-df8f05be55ba",
                googleProjectNumber: "703322744261"});