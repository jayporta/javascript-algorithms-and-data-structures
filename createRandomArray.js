const createRandomArray =()=> {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(
      Math.floor( (Math.random() * i) + 1 )
    );
  }
  return arr;
}
