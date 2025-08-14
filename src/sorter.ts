export class ArrayAlgorithms {
  /**
   * Sorts an array of numbers in ascending order using the bubble sort algorithm.
   * The algorithm repeatedly steps through the list, compares adjacent elements,
   * and swaps them if they are in the wrong order. The pass through the list is
   * repeated until no swaps are needed, indicating that the list is sorted.
   *
   * @param arr - The array of numbers to be sorted.
   * @returns The sorted array of numbers in ascending order.
   */
  bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
      let swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) break;
    }
    return arr;
  }

  /**
   * Sorts an array of numbers in ascending order using the insertion sort algorithm.
   * The algorithm takes elements from the list one by one and inserts them at their
   * correct position into a new sorted list. In the worst case, the algorithm has a
   * time complexity of O(n^2), making it inefficient on large lists.
   *
   * @param arr - The array of numbers to be sorted.
   * @returns The sorted array of numbers in ascending order.
   */
  insertionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      let currentElement = arr[i];
      let lastIndex = i - 1;

      while (lastIndex >= 0 && arr[lastIndex] > currentElement) {
        arr[lastIndex + 1] = arr[lastIndex];
        lastIndex -= 1;
      }

      arr[lastIndex + 1] = currentElement;
    }

    return arr;
  }

  /**
   * Searches for a value in an array by iterating through the array and comparing
   * each element to the value. If the value is found, the index of the value is
   * returned. If the value is not found, -1 is returned.
   *
   * @param arr - The array of numbers to be searched.
   * @param value - The value to be searched for in the array.
   * @returns The index of the value in the array if found, or -1 if not found.
   */
  linearSearch(arr: number[], value: number) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
    }

    return -1;
  }

  /**
   * Searches for a value in an array by iterating through the array and comparing
   * each element to the value. If the value is found, the index of the value is
   * returned. If the value is not found, -1 is returned. The search is done in an
   * efficient manner by starting from the edges of the array (left and right) and
   * moving towards the center of the array.
   *
   * @param arr - The array of numbers to be searched.
   * @param value - The value to be searched for in the array.
   * @returns The index of the value in the array if found, or -1 if not found.
   */
  efficientLinearSearch(arr: number[], value: number) {
    const n = arr.length;

    let left = 0;
    let right = n - 1;
    let position = -1;

    while (left <= right) {
      if (arr[left] === value) {
        position = left;
        break;
      }

      if (arr[right] === value) {
        position = right;
        break;
      }

      left++;
      right--;
    }

    return position;
  }
}
