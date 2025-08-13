export class BinarySearchTree<T> {
  value: T;

  left?: BinarySearchTree<T>;
  right?: BinarySearchTree<T>;

  constructor(value: T) {
    this.value = value;
  }

  /**
   * Inserts a new value into the binary search tree.
   * If the new value is less than the current node's value, it is inserted into the left subtree.
   * If the new value is greater than or equal to the current node's value, it is inserted into the right subtree.
   *
   * @param value - The value to be inserted into the tree.
   */
  insert(value: T) {
    if (value < this.value) {
      this.left
        ? this.left.insert(value)
        : (this.left = new BinarySearchTree(value));
    } else {
      this.right
        ? this.right.insert(value)
        : (this.right = new BinarySearchTree(value));
    }
  }

  /**
   * Searches for a value in the binary search tree.
   * Returns true if the value is found, otherwise false.
   *
   * @param value - The value to search for in the tree.
   * @returns A boolean indicating whether the value is present in the tree.
   */
  search(value: T): boolean {
    let inTree: boolean;

    if (value === this.value) {
      inTree = true;
    } else if (value < this.value) {
      this.left ? (inTree = this.left.search(value)) : (inTree = false);
    } else {
      this.right ? (inTree = this.right.search(value)) : (inTree = false);
    }

    return inTree;
  }

  printTreeVisual(
    node: BinarySearchTree<T> = this,
    indent: string = "",
    last: boolean = true
  ) {
    if (!node) return;

    console.log(indent + (last ? "└── " : "├── ") + node.value);

    const newIndent = indent + (last ? "    " : "│   ");

    const hasLeft = node.left !== null;
    const hasRight = node.right !== null;

    if (hasLeft || hasRight) {
      if (node.left) this.printTreeVisual(node.left, newIndent, !node.right);
      if (node.right) this.printTreeVisual(node.right, newIndent, true);
    }
  }
}
