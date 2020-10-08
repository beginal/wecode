function example() {
  const newArr = Array(50).fill().map((v,i) => i+1).filter((v) => !(v % 2));
  return newArr;
}

console.log(example())