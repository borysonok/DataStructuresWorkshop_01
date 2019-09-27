function Queue() {
  //this.size = 0;
  this.arr = [];
}

Queue.prototype.enqueue = function(val) {
  this.arr.push(val);
  //this.size++;
};

Queue.prototype.dequeue = function () {
  //this.size--;
  if (!this.size()) return undefined;
  return this.arr.shift();
};

Queue.prototype.size = function() {
  return this.arr.length;
};
