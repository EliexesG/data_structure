export interface node<T> {
  value: T;
  next?: node<T> | undefined;
  prev?: node<T> | undefined;
}

export class LinkedList<T> {
  head?: node<T>;
  tail?: node<T>;

  /**
   * Returns the number of elements in the linked list.
   *
   * @returns The number of elements in the linked list.
   */
  get length() {
    let current = this.head;
    let count = 0;

    while (current) {
      count += 1;
      current = current.next;
    }

    return count;
  }

  /**
   * Adds a new element to the end of the linked list.
   * If the list is empty, sets the new element as both the head and the tail.
   * Otherwise, sets the new element as the tail.
   * @param value The value of the element to be added.
   */
  push(value: T): void {
    if (!this.head && !this.tail) {
      this.head = { value };
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = { value, prev: this.tail };
      this.tail = this.tail.next;
    }
  }

  /**
   * Removes and returns the last element of the linked list.
   * If the list is empty, returns undefined.
   *
   * @returns The value of the last element, or undefined if the list is empty.
   */
  pop(): T | undefined {
    if (!this.tail) return undefined;

    const value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next = undefined;
    else this.head = undefined;

    return value;
  }

  /**
   * Returns the value of the last element of the linked list, without removing it from the list.
   * If the list is empty, returns undefined.
   *
   * @returns The value of the last element, or undefined if the list is empty.
   */
  peek(): T | undefined {
    return this.tail?.value;
  }

  /**
   * Removes and returns the first element of the linked list.
   * If the list is empty, returns undefined.
   *
   * @returns The value of the first element, or undefined if the list is empty.
   */
  shift(): T | undefined {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev = undefined;
    else this.tail = undefined;

    return value;
  }

  /**
   * Returns the value of the first element of the linked list, without removing it from the list.
   * If the list is empty, returns undefined.
   *
   * @returns The value of the first element, or undefined if the list is empty.
   */
  first(): T | undefined {
    return this.head?.value;
  }

  /**
   * Returns the value of the element at the given index in the linked list, or undefined if the index is out of bounds.
   * The index is zero-based.
   *
   * @param index - The index of the element to be retrieved.
   * @returns The value of the element at the given index, or undefined if the index is out of bounds.
   */
  getByIndex(index: number): T | undefined {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current.value;
      current = current.next;
      count += 1;
    }

    return undefined;
  }

  /**
   * Iterates over each element in the linked list, executing the provided callback function on each element's value.
   *
   * @param callBack - A function that is called with the value of each element in the linked list.
   */
  forEach(callBack: (value: T) => void) {
    let current = this.head;

    while (current) {
      callBack(current.value);
      current = current.next;
    }
  }

  /**
   * Prints all the elements of the linked list from left to right.
   * Does not modify the linked list.
   */
  print() {
    let current = this.head;
    let printable = "[";

    while (current) {
      printable += `${current.value}${current.next ? ", " : ""}`;
      current = current.next;
    }

    console.log(`${printable}]`);
  }
}
