var linkList = function() {

	linkList.makeNode = function() {
		return {
			data : null,
			next : null
		};
	};

	this.start = null;
	this.end = null;

	this.add = function(data) {
		if(this.start === null) {
			this.start = linkList.makeNode();
			this.end = this.start;
		} else {
			this.end.next = linkList.makeNode();
			this.end = this.end.next;
		}
		this.end.data = data
	}

}