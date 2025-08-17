type hashTableType<T> = Record<string, T> | undefined;

export class HashTable<T> {
  private _table: Array<hashTableType<T>>;

  /**
   * Creates a new hash table with the given size.
   * @param size The size of the hash table.
   */
  constructor(size: number) {
    this._table = Array<hashTableType<T>>(size).fill(undefined);
  }

  /**
   * Returns the number of cells in the hash table.
   * @returns The number of cells taken in the hash table.
   */
  get numCellsTaken() {
    return this._table.filter((item) => item !== undefined).length;
  }

  /**
   * Returns the total number of items in the hash table.
   * @returns The total number of items in the hash table.
   */
  get numItems() {
    return this._table.reduce(
      (acc, item) => acc + Object.keys(item || {}).length,
      0
    );
  }

  get lenght() {
    return this._table.length;
  }

  /**
   * Resizes the hash table to double its current size.
   * After resizing, all existing key-value pairs are reinserted into the new table.
   */
  resize() {
    const newTable = Array<hashTableType<T>>(this._table.length * 2).fill(
      undefined
    );

    this._table.forEach((item) => {
      if (item)
        Object.keys(item).forEach((key) =>
          this.insertItem(key, item[key], newTable)
        );
    });

    this._table = newTable;
  }

  /**
   * Inserts a key-value pair into the hash table.
   * If the load factor exceeds 0.8, the table is resized to accommodate more elements.
   * The key-value pair is then inserted into the hash table.
   *
   * @param key - The key associated with the value to be inserted.
   * @param value - The value to be inserted into the hash table.
   */
  insert(key: string, value: T) {
    const loadFactor = this.numCellsTaken / this._table.length;

    if (loadFactor > 0.8) this.resize();

    this.insertItem(key, value, this._table);
  }

  /**
   * Returns the value associated with the given key from the hash table.
   * If the key is not present in the hash table, returns undefined.
   *
   * @param key - The key associated with the value to be retrieved.
   * @returns The value associated with the given key, or undefined if the key is not present in the hash table.
   */
  get(key: string): T | undefined {
    const index = this.hashStringToIndex(key);
    return this._table[index]?.[key];
  }

  /**
   * Removes the key-value pair associated with the given key from the hash table.
   * If the key is not present in the hash table, the method does nothing.
   *
   * @param key - The key associated with the value to be removed.
   */
  remove(key: string) {
    const index = this.hashStringToIndex(key);
    delete this._table[index]?.[key];
  }

  print() {
    console.log(this._table);
  }

  /**
   * A simple hash function that takes a string and returns a number between 0 and this.SIZE - 1.
   * The hash function works by taking the sum of the char codes of all the characters in the string.
   * The final hash value is the remainder of the sum divided by this.SIZE.
   * @param key - the string to be hashed
   * @returns the hash value as a number between 0 and this.SIZE - 1
   */
  private hashStringToIndex(key: string, size = this._table.length): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % size;
  }

  /**
   * Inserts a key-value pair into the specified hash table.
   * If the computed index already contains a list, the pair is appended to the list.
   * Otherwise, a new list is created at the index with the pair as its first element.
   *
   * @param key - The key associated with the value to be inserted.
   * @param value - The value to be inserted into the hash table.
   * @param table - The hash table where the key-value pair should be inserted.
   */
  private insertItem(key: string, value: T, table: Array<hashTableType<T>>) {
    const index = this.hashStringToIndex(key, table.length);

    if (table[index]) {
      table[index][key] = value;
      return;
    }

    table[index] = { [key]: value };
  }
}
