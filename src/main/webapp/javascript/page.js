function showOverlay() {
	document.getElementById("overlay").classList.add("show");  // Show the overlay
}

function hideOverlay() {
	document.getElementById("overlay").classList.remove("show");  // Hide the overlay
}


function showEditOverlay(filmID) {
	var input = document.getElementById("edit-id");
	input.value = filmID;
	document.getElementById("edit-overlay").classList.add("show");  // Show the overlay
}

function hideEditOverlay() {
	var input = document.getElementById("edit-id");
	input.value = null;
	document.getElementById("edit-overlay").classList.remove("show");  // Hide the overlay
}

function showDeleteOverlay(filmID) {
	var input = document.getElementById("delete-movie-id");
	input.value = filmID;
	document.getElementById("delete-overlay").classList.add("show");  // Show the overlay
}

function hideDeleteOverlay() {
	var input = document.getElementById("delete-movie-id");
	input.value = null;
	document.getElementById("delete-overlay").classList.remove("show");  // Hide the overlay
}
function consoleLog() {
	console.log("workign?")
}



