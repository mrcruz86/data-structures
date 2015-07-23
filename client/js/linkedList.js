var LinkList = function() {

	LinkList.makeNode = function() {
		return {
			data : null,
			next : null
		};
	};

	this.start = null;
	this.end = null;

	this.add = function(data) {
		if(this.start === null) {
			this.start = LinkList.makeNode();
			this.end = this.start;
		} else {
			this.end.next = LinkList.makeNode();
			this.end = this.end.next;
		}
		this.end.data = data
	};

	this.addAtFirst = function(data) {
		var temp = LinkList.makeNode();
		temp.next = this.start;
		this.start = temp;
		temp.data = data;
	};

	this.delete = function(data) {
		var current = this.start;
		var previous = this.start;
		while (current !== null) {
			if (data === current.data) {
				if (current === this.start) {
					this.start = current.next;
					return;
				} 
				if (current === this.end) {
					this.end = previous;
				}
				previous.next = current.next;
				return;
			} else {
				previous = current;
				current = current.next;
			}
			
		}
	};

	this.insertAfter = function(t, d) {
		var current = this.start;
		while(current !== null) {
			if (current.data === t) {
				var temp = LinkList.makeNode();
				temp.data = d;
				temp.next = current.next;
				if (current == this.end) {
					this.end = temp;
				}
				current.next = temp;
				return;
			}
			current = current.next;
		}
	};

}