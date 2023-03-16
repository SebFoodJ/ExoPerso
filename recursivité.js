
let tab = [1, 2, 4, 6, 8, 8];

function sum1(y) {
  var sumNum = 0;
  for (let i = 0; i < y.length; i++) {
    sumNum = sumNum + y[i];
  }
  return sumNum;
}
console.log(sum1(tab));

function sum2(y) {
  if (y.length===0) return 0;
  else 
  var x = y.pop()
  return x + sum2(y);
}
console.log(sum2(tab));

function factorial(x) {
  if (x === 0) return 1;
  else return x * factorial(x - 1);
}
console.log(factorial(3));

// Renvoie les X premiers termes de la suite de Fibonacci - Donner un x au moins superieur a 2
function fibonacci(x, y=[0,1]) {
  if (x===2) return y
  else 
  x = x-1
  let z = y[y.length-1] + y[y.length-2]
  y.push(z)
  return fibonacci(x,y)
}

console.log(fibonacci(10))