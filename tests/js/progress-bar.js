document.getElementById(id).style.width = 0;

function setPercentage(id, percentage) {
	var elm = document.getElementById(id);
	elm.style.width = percentage + "%";
}

function changePercentage(id, percentage) {
	var v = document.getElementById(id).style.width
	v = parseInt(v)
	if v == 'NaN' {
		v = 0
	}
	var inc = v + percentage;
	setPercentage(id, inc);
}
