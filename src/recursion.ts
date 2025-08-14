export class Recursion {
  /**
   * Computes the factorial of a given non-negative integer `n`.
   * The factorial of `n` is the product of all positive integers less than or equal to `n`.
   * The function uses a recursive approach, where `factorial(n)` calls `factorial(n-1)` until reaching the base case.
   *
   * @param n - A non-negative integer whose factorial is to be calculated.
   * @returns The factorial of `n`.
   */
  factorial(n: number): number {
    if (n === 0) return 1;
    return n * this.factorial(n - 1);
  }

  /**
   * Computes the nth Fibonacci number.
   * The Fibonacci sequence is a series of numbers, where a number is the addition of the last two numbers, starting with 0 and 1.
   * The function uses a recursive approach, where fibonacci(n) calls fibonacci(n-1) and fibonacci(n-2) until reaching the base case.
   *
   * @param n - The index of the Fibonacci number to be calculated.
   * @returns The nth Fibonacci number.
   */
  fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}
