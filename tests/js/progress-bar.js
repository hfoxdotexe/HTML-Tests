function setPercentage(id, percentage) {
	var elm = document.getElementById(id);
	elm.style.width = percentage + "%";
}

function changePercentage(id, percentage) {
	var inc = document.getElementById(id).style.width + percentage;
	alert(inc);
	setPercentage(id, inc + '%');
}
