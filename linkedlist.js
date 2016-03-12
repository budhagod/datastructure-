function Node(data){
	this.data = data;
	this.next = null;
}
function SinglyList(){
	this.head = null;
	this._length = 0;
}
//Adding items
SinglyList.prototype.add = function(data){
	var node = new Node(data),
		currentNode = this.head;
	//if the current linked list is empty 
	if(!currentNode){

		this.head = node;
		this._length++;
		return node;
	}
	// if the linked list is not empty use the while loop to find last element and then insert the data
	while(currentNode.next){
		currentNode = currentNode.next;
	}
	currentNode.next = node;
	this._length++;
	return node;

};
//searching for a particular value at a particular index
SinglyList.prototype.searchNodeAt = function(position){
	var currentNode = this.head,
		length = this._length,
		count = 1,
		message = {failure: 'Failure item is not present in the linked list'};
	if(length === 0 || position < 1 || position > length ){
			throw new Error(message.failure);
	}
	while(count < position){
			currentNode = currentNode.next;
			count++;
	}
	return currentNode;
};


//deleting Node

SinglyList.prototype.deleteNode = function(position){
	var currentNode = this.head,
		count = 0,
		length = this._length,
		message = {failure: "Cannot find the node"},
		nodeBeforeToDelete = null,
		nodeToBeDeleted = null,
		nodeDeleted = null

	if(length < 1 || position > length || position < 1){

			throw new Error(message.failure);
	}
	if(position === 1){
		nodeDeleted =currentNode;
		this.head = currentNode.next;
		currentNode = null;
		this._length--;
		return nodeDeleted;

	}
	while(count < position){
		nodeBeforeToDelete = currentNode;
		nodeToBeDeleted = currentNode.next;
		count++;
	}
	nodeBeforeToDelete.next = currentNode.next;
	nodeDeleted = nodeToBeDeleted;
	nodeToBeDeleted = null;
	this._length--;
	return nodeDeleted;


};

var linked = new SinglyList();
linked.add(3);
linked.add(33);
linked.add(333);
linked.add(3333);

var searchResult = linked.searchNodeAt(2);
console.log(searchResult);

var deletedNode = linked.deleteNode(3);
console.log(deletedNode);