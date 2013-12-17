window.onload = function() {
	var port = chrome.extension.connect({ name: "get-pdf-port" });
	document.getElementById("button").onclick = function() {
    	port.postMessage({ type: "get-pdf"});
	}
}