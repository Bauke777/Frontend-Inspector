chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		function clearView() {
			document.body.innerHTML = "";
			document.head.innerHTML = '';
		}

		function addPanels() {
				var leftPanel = document.createElement("div");
				leftPanel.classList.add("left-panel");
				document.body.appendChild(leftPanel);

				var centerPanel = document.createElement("div");
				centerPanel.classList.add("center-panel");
				document.body.appendChild(centerPanel);

				var rightPanel = document.createElement("div");
				rightPanel.classList.add("right-panel");
				document.body.appendChild(rightPanel);
		}

		function openFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://baukeposthuma.nl/");
        document.getElementsByClassName("center-panel")[0].appendChild(ifrm);
    }

		clearView();
		addPanels();
		openFrame();

	}
	}, 10);
});
