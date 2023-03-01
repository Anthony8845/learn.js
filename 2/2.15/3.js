function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = Math.floor(Math.random() * 10);
let n = Math.floor(Math.random() * 10);

if (n < 1) {
  console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  console.log(pow(x, n));
}