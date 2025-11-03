{
  function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}

// Sample Input:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
}