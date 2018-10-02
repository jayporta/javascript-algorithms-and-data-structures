(() => {
  /*
  Resources:
    https://www.youtube.com/watch?v=S1qHWjP1hb0
    https://youtu.be/aQiWF4E8flQ
    https://www.youtube.com/watch?v=0KBvaKc__rc&t=21s
  */
  const numbers = createRandomArray();
  const animals = ['cow', 'duck', 'gerbil', 'shark', 'zebra', 'walrus', 'seal',
    'lion', 'cat', 'dog', 'bat', 'hamster', 'water buffalo', 'tardigrade'];

  quickSort = (arr) => {
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) left.push(arr[i])
      else right.push(arr[i]);
    }
    return quickSort(left).concat(pivot).concat(quickSort(right));
  }
  console.log(quickSort(animals));
  console.log(quickSort(numbers));
})();
