import { LinkedList } from "./linked_list";

export class Stack<T> {
  private _stack = new LinkedList<T>();

  get linkedList() {
    return this._stack;
  }

  push(element: T) {
    this._stack.push(element);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    return this._stack.peek();
  }

  print() {
    this._stack.print();
  }
}
