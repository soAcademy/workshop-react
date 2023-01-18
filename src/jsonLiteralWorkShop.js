// const fruitBasket = {
//   apple: 10,
//   banana: 5,
//   orange: 2
// }
// console.log(`I have ${fruitBasket.apple} apple, ${fruitBasket.banana} banana, ${fruitBasket.orange} orange`);

const fruitBasket = {
  apple: { amount: 10, color: 'red' },
  banana: { amount: 5, color: 'yellow' },
  orange: { amount: 2, color: 'orange' }
  }
  
console.log(`I have ${fruitBasket.apple.amount} apple, and the color is ${fruitBasket.apple.color}`)
// //Q1
// const string = `string text line 1
// string text line 2`
// console.log(string);

// //Q2
// const a = 10;
// const b = 20;
// console.log(`Sum of a + b is:  + ${(a + b)}`);

//Q3
// const a = 10;
// const b = 20;
// console.log(`Sum of a + b is ${a + b} and\nMultiple of a * b is: ${a*b}`);

//Q4
const oddOrEven = (number) => {
  if (number %2 ===0) {
    return 'even'
  }else {
    return 'odd'
  }
}
console.log(`1 is an ${oddOrEven(1)} number`);