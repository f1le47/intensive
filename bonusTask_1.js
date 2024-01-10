arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

function firstSum(arr, total) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
}

firstSum(arr, total);

// Сложность алгоритма O(n * n)