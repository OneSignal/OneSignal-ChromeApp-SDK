OneSignal.init({appId: "b2f7f966-d8cc-11e4-bed1-df8f05be55ba",
                googleProjectNumber: "703322744261"});

OneSignal.addListenerForNotificationOpened(function(data) {
    console.log("NotificationOpened:data:", data);
});
OneSignal.getIdsAvailable(function(ids) {
    console.log("Backgrond page:getIdsAvailable:ids:", ids);
});

// Example showing how to prevent displaying a notification based on the payload contents
OneSignal.addWillProcessMessageReceived(async function(payload) {
    console.log("addWillProcessMessageReceived:", payload);

    const customData = JSON.parse(payload.data.custom);
    if (customData.a) {
        // additionalData here is the custom has set on the OneSignal dashboard or REST API via the "data" field
        const additionalData = customData.a;
        // is_silent is just an example key, this can be any key or value you define in your additional data.
        if (additionalData.is_silent === "1") {
            console.log("Payload has is_silent, preventing notification from displaying");
            return true;
        }
    }

    // returning false prevents the notifiation from displaying.
    return false;
});