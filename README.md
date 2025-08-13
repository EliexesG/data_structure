# Algoritmos

A TypeScript implementation of classic data structures: **Stack**, **Queue**, **Linked List**, **Binary Search Tree**, and **Hash Table**. Each data structure is implemented from scratch and demonstrated in [`index.ts`](index.ts).

## Features

- **Stack** ([src/stack.ts](src/stack.ts)): LIFO operations (`push`, `pop`, `peek`, `print`)
- **Queue** ([src/queue.ts](src/queue.ts)): FIFO operations (`enqueue`, `dequeue`, `print`)
- **Linked List** ([src/linked_list.ts](src/linked_list.ts)): Doubly linked list with traversal, insertion, removal, and printing
- **Binary Search Tree** ([src/binary_search_tree.ts](src/binary_search_tree.ts)): Insert, search, and visual print
- **Hash Table** ([src/hash_table.ts](src/hash_table.ts)): Insert, get, remove, resize, and print

## Usage

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the demo:**
   ```sh
   npm run dev
   ```

   This will execute [`index.ts`](index.ts), showcasing all data structures.

## Project Structure

```
src/
  binary_search_tree.ts
  hash_table.ts
  linked_list.ts
  queue.ts
  stack.ts
index.ts
package.json
tsconfig.json
```

## Example Output

```
BINARY SEARCH TREE:
└── 5
    ├── 3
    │   ├── 2
    │   │   └── 1
    │   └── 4
    └── 7
        ├── 6
        └── 8
            └── 9
Is 4 in the tree? true
Is 10 in the tree? false
...
```

## License

ISC

---

Made
