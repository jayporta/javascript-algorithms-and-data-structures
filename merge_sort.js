// Merge sort

const array = createRandomArray();

mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  const sorted = []
  while (left.length && right.length) {
    if (left[0] < right[0]) sorted.push(left.shift());
    else sorted.push(right.shift())
  }
  return sorted.concat(left.length ? left : right);
}
