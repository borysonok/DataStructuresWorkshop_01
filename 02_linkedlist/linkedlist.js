'use strict';

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(str) {
  this.value = str;
  this.next = null;
  this.previous = null;
}

LinkedList.prototype.addToHead = function(value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = this.tail = node;
  } else {
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value);
  newNode.previous = this.tail;
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.tail) {
    return null;
  } else if (this.head === this.tail) {
    const temp = this.head;
    this.head = this.tail = null;
    return temp.value;
  } else {
    const temp = this.head;
    this.head = temp.next;
    this.head.previous = null;
    temp.next = null;
    return temp.value;
  }
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  } else if (this.head === this.tail) {
    const temp = this.tail;
    this.head = this.tail = null;
    return temp.value;
  } else {
    const temp = this.tail;
    this.tail = temp.previous;
    this.tail.next = null;
    temp.previous = null;
    return temp.value;
  }
};

LinkedList.prototype.search = function(data) {
  let curr = this.head;
  if (typeof data === 'function') {
    while (curr) {
      if (data(curr.value)) {
        return curr.value;
      }
      curr = curr.next;
    }
    return null;
  } else {
    while (curr) {
      if (curr.value === data) {
        return curr.value;
      }
      curr = curr.next;
    }
    return null;
  }
};
