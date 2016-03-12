function Queue(){
	this._storage =[];
	this._oldestIndex = 1;
	this._newestIndex = 1;
}

Queue.prototype.size = function(){
	return this._newestIndex-this._oldestIndex;
};

Queue.prototype.enqueue = function(data){
	this._storage[this._newestIndex] = data;
	this._newestIndex++;
};
Queue.prototype.dequeue = function(){
	var deletedItem,
		oldestIndex = this._oldestIndex,
		newestIndex = this._newestIndex;
	if(oldestIndex !== newestIndex){
		deletedItem = this._storage[oldestIndex];
		delete this._storage[oldestIndex];
		this._oldestIndex++;
		return deletedItem;	
	}
};

var data = new Queue();
data.enqueue(12);
data.enqueue(15);
data.enqueue(56);
var deleted = data.dequeue();

console.log(deleted);
var deleted = data.dequeue();
console.log(deleted);
