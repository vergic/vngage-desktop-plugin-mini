var vPlug = window.vergicDesktopPlugin;

// initialize plugin with subscription receiver
vPlug.init(function (subscription) {
	// add subscription messages to the text field
	document.getElementById("subscriptionsText").value += JSON.stringify(subscription, null, 2);
});

setTimeout(function () {
	// init send button
	document.getElementById("sendButton").addEventListener("click", function () {
		var action = document.getElementById("actionText").value;
		// send action to vergic desktop
		vPlug.send(JSON.parse(action));
	});

}, 300)
