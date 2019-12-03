var vPlug = window.vergicDesktopPlugin;


setTimeout(function () {
	// init send button
	var iFrameContentWindow = document.getElementById('plugout').contentWindow;
	// initialize plugin with subscription receiver
	vPlug.init(function (subscription) {
		// add subscription messages to the text field
		document.getElementById("subscriptionsText").value += JSON.stringify(subscription, null, 2);
	}, null, iFrameContentWindow);

	document.getElementById("sendButton").addEventListener("click", function () {
		var action = document.getElementById("actionText").value;
		// send action to vergic desktop
		vPlug.send(JSON.parse(action));
	});

}, 300);

