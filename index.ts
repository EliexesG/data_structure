import { Stack } from "./src/stack";
import { Queue } from "./src/queue";
import { BinarySearchTree } from "./src/binary_search_tree";
import { HashTable } from "./src/hash_table";
import { ArrayAlgorithms } from "./src/sorter";

//#region Binary Search Tree
console.log("BINARY SEARCH TREE:\n");
const bnTree = new BinarySearchTree<number>(5);
bnTree.insert(3);
bnTree.insert(7);
bnTree.insert(2);
bnTree.insert(4);
bnTree.insert(6);
bnTree.insert(8);
bnTree.insert(1);
bnTree.insert(9);

bnTree.printTreeVisual();
console.log("Is 4 in the tree?", bnTree.search(4));
console.log("Is 10 in the tree?", bnTree.search(10));
console.log("\n======================================\n");
//#endregion

//#region Stack
console.log("STACK:\n");
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.print();
console.log("\n======================================\n");
//#endregion

//#region Queue
console.log("QUEUE:\n");
const queue = new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.dequeue();
queue.print();
console.log("\n======================================\n");
//#endregion

//#region Hash Table
console.log("HASH TABLE:\n");
const hashTable = new HashTable<number>(3);
console.log(`Total size of hash table (before resize): ${hashTable.lenght}\n`);

hashTable.insert("BA", 1);
hashTable.insert("B", 2);
hashTable.insert("C", 3);
hashTable.insert("AB", 4);
hashTable.insert("Z", 4);
hashTable.remove("B");

hashTable.print();

console.log('\nValue of key "C":', hashTable.get("C"));
console.log('Value of key "B" (was removed):', hashTable.get("B"));

console.log("\nNumber of cells taken in hash table:", hashTable.numCellsTaken);
console.log("Number of items in hash table:", hashTable.numItems);
console.log("Total size of hash table:", hashTable.lenght);
console.log("\n======================================\n");
//#endregion

//#region Array Algorithms
console.log("SORT:\n");
const arrayAlogrithms = new ArrayAlgorithms();
const arrayA = [4, 3, 1, 32, 2, 35, 21];

console.log("Unsorted array (bubble):", arrayA);
console.log("Sorted array (bubble):", arrayAlogrithms.bubbleSort(arrayA));
console.log("Linear search:", arrayAlogrithms.linearSearch(arrayA, 3));

const arrayB = [3, 2, 1, 4, 53, 43, 21, 52];

console.log("Unsorted array (insertion):", arrayB);
console.log("Sorted array (insertion):", arrayAlogrithms.insertionSort(arrayB));
console.log("Efficient linear search:", arrayAlogrithms.efficientLinearSearch(arrayA, 3));
console.log("\n======================================\n");
//#endregion
