// ข้อ 1
const fruitBasket = {
  apple: 10,
  banana: 5,
  orange: 2,
};

//ข้อ2
console.log(
  `I have [จํานวน apple] apple, [จํานวน banana] banana, [จํานวน orange] orange`
);
// ans:
console.log(
  `I have ${fruitBasket.apple} apple, ${fruitBasket.banana} banan, ${fruitBasket.orange}orange.`
);

//ข้อ3
const fruitBaskets = {
  apple: { amount: 10, color: "red" },
  banana: { amount: 5, color: "yellow" },
  orange: { amount: 2, color: "orange" },
};
console.log(`I have [จํานวน apple] apple, and the color is [สีของ apple]`);
//ans:
console.log(
  `I have ${fruitBaskets.apple} apple, and the color is ${fruitBaskets.apple.color}`
);
