// Using recursion to solve binary search algorithm
function binarySearch(arr, target) {
  let mid = Math.floor(arr.length / 2);
  let midValue = arr[mid];

  if (midValue === target) {
    return arr.indexOf(midValue);
  } else if (midValue < target && arr.length > 1) {
    return binarySearch(arr.slice(mid, arr.length), target);
  } else if (midValue > target && arr.length > 1) {
    return binarySearch(arr.slice(0, mid), target);
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
