let x = 5;
console.log("1. gelen veri: ", x);

setTimeout(() => {
  x = x + 5;
  console.log("2. gelen veri: ", x);
}, 5000);

x = x + 5;
console.log("3. gelen veri: ", x); 