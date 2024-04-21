import Node from "./node.js";

function LinkedList() {
  let head = null;
  let size = 0;

  function append(value) {
    // adds a new node containing value to the end of the list
    const newNode = new Node(value);
    if (head === null) {
      // if empty list, make the head the new node
      head = newNode;
    }
    // create pointer for while loop conditional
    let pointer = head;
    while (pointer.next !== null) {
      // if the list consist of more than 1 node, continue to traverse the list until you reach the last node

      pointer = pointer.next;
    }
    // if list consist of only 1 node assign head.next to = the new node
    pointer.next = newNode;
    size++;
  }
  function prepend(value) {
    //   adds a new node containing value to the start of the list
    const newNode = new Node(value, head);
    head = newNode;
    size++;
  }

  function getSize() {
    // returns the total number of nodes in the list
    return size;
  }
  // returns the first node in the list
  function getHead() {
    return head;
  }

  // returns the last node in the list
  function getTail() {
    let pointer = head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  // returns the node at the given index
  function at(index) {
    let current = head;
    for (let i = 0; i < index; i++) {
      // do i need current?.next
      current = current?.next;
    }
    return current;
  }

  // removes the last element from the list
  function pop() {
    let pointer = head;
    let prevPointer;
    while (pointer.next !== null) {
      prevPointer = pointer;
      pointer = pointer.next;
    }

    prevPointer.next = null;
    size--;
    return pointer;
  }

  //   returns true if the passed in value is in the list. Otherwise returns false
  function contains(value) {
    let pointer = head;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  // returns the index of the code containing value, or null if not found
  function find(value) {
    let pointer = head;
    let index = 0;
    // }
    while (pointer !== null) {
      if (pointer.value === value) return index;
      index++;
      pointer = pointer.next;
    }
    return null;
  }

  // represents your LinkedList objects as strings, so you can print them out and preview them in the console
  function toString() {
    let pointer = head;
    let result = "";
    while (pointer !== null) {
      result += ` ( ${pointer.value} ) -> `;
      pointer = pointer.next;
    }
    return result === "" ? "Empty List" : result + "null";
  }

  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
      return;
    }
    const prevNode = at(index - 1);
    const newNode = new Node(value, prevNode.next);
    prevNode.next = newNode;
    size++;
  }

  function removeAt(index) {
    if (index > size || index < 0) return;
    if (index === 0) {
      head = head.next;
      return;
    }
    const prevNode = at(index - 1);
    prevNode.next = prevNode.next.next;
    size--;
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
