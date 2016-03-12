function Stack(){

	this._size = 0;
	this._storage = {};

}

Stack.prototype.push= function(data){
	var size =++this._size;
	this._storage[size] = data;
};

Stack.prototype.pop=function(){
	var size = this._size,
				deletedItem;
	if(size){
		deletedItem = this._storage[size];
		delete this._storage[size];
		this._size--;
		return deletedItem;
	}

};

var data = new Stack();
data.push(2);
data.push(38);
data.push(89);
var result = data.pop();

console.log(result); 
console.log(data._storage);

/*function MyArray() {
  this.array = [];
}

MyArray.prototype.add = function(data) {
  this.array.push(data);
};
MyArray.prototype.remove = function(data) {
  if(this.array.indexOf(data)) {
    this.array.splice(this.array.indexOf(data), 1);
  }
};
MyArray.prototype.search = function(data) {
  if(this.array.indexOf(data)) {
    return this.array.indexOf(data);
  } else {
    return null;
  }
};
MyArray.prototype.getAtIndex = function(index) {
  return this.array[index];
};
MyArray.prototype.length = function() {
  return this.array.length;
};
MyArray.prototype.print = function() {
  console.log(this.array.join(' '));
};

var array = new MyArray();
array.add(1);
array.add(2);
array.add(3);
array.add(4);
array.print(); // => 1 2 3 4
console.log('search 3 gives index 2:', array.search(3)); // => 2
console.log('getAtIndex 2 gives 3:', array.getAtIndex(2)); // => 3
console.log('length is 4:', array.length()); // => 4
array.remove(3);
array.print();
*/