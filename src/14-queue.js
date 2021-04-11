const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.head = new ListNode();
    this.tail = this.head;
    this.quantity = 0;
  }

  get size() {
    return this.quantity;
  }

  enqueue(element) {
    this.tail.value = element;
    this.tail.next = new ListNode();
    this.tail = this.tail.next;
    this.quantity++;
    return this;
  }

  dequeue() {
    const top = this.head.value;
    this.head = this.head.next;
    this.quantity--;
    return top;
  }
}

module.exports = Queue;
