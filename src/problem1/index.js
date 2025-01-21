/* # Task

Provide 3 unique implementations of the following function in JavaScript.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

``` */
var sum_to_n_a = function (n) {
  if (n <= 0) return 0;
  return n + sum_to_n_a(n - 1);
};
/* 
Time complexity: O(n)
Space complexity: O(n) 
*/

var sum_to_n_b = function (n) {
  if (n <= 0) return 0;
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
/*
Time complexity: O(n)
Space complexity: O(1)
*/

var sum_to_n_c = function (n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
};
/*
Time complexity: O(1)
Space complexity: O(1)
*/

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
