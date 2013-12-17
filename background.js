// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	suggest([
	  {content: "get-pdf", description: "Download PDF"}
	]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
	if(text == "get-pdf") getPdf();;
});

// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "get-pdf":
            getPdf();
        break;
    }
    return true;
});

// listening for an event / long-lived connections
// coming from devtools
chrome.extension.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
       	switch(port.name) {
			case "get-pdf-port":
				getPdf();
			break;
		}
    });
});

// send a message to the content script
var getPdf = function() {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "get-pdf", color: "#00000"});
	});
}