function setProgress(id, progress) {
	pb = getElementFromId(id);
	$(pb).width(progress);
}
