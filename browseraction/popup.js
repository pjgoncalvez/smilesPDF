window.onload = function() {
	document.getElementById("getpdf").onclick = function() {
		chrome.extension.sendMessage({
	        type: "get-pdf"
	    });
	}
}