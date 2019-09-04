function loadPanel(x) {
	var n = document.getElementById("panelNotifications");
	var h = document.getElementById("panelHistory");

	if(x == "notifications") {
		h.style.display = "none";
		n.style.display = "block";
	} else {
		n.style.display = "none";
		h.style.display = "block";
	}
}