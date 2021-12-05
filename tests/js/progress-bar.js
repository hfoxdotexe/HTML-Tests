function setProgress(id, progress) {
	pb = getElementFromId(id);
	pb.style.width=progress;
}
