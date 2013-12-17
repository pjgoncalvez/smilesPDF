chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "get-pdf":
			var obj = document.getElementById("resourceobject");
			var pdfurl = obj.getAttribute("data");
			var win=window.open(pdfurl, '_blank');
			win.focus();
		break;
	}
});