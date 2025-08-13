import { LinkedList } from "./linked_list";

export class Queue<T> {
  private _queue = new LinkedList<T>();

  enqueue(element: T) {
    this._queue.push(element);
  }

  dequeue() {
    return this._queue.shift();
  }

  print() {
    this._queue.print();
  }
}
