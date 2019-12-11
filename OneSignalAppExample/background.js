chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("ExamplePage.html");
});

OneSignal.init({appId: "b2f7f966-d8cc-11e4-bed1-df8f05be55ba",
                googleProjectNumber: "703322744261"});

OneSignal.addListenerForNotificationOpened(function(data) {
    console.log("NotificationOpened:data:", data);
});
OneSignal.getIdsAvailable(function(ids) {
    console.log("Backgrond page:getIdsAvailable:ids:", ids);
});