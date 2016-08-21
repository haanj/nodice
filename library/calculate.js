'use strict';
module.exports = dice => {
  var arr = dice.split('d');

  // if arr.length <= 1, it will be a number modifier or error
  if (arr.length <= 1) {
    return parseInt(arr[0]);
  }

  function rollDice(sides) {
    return Math.floor(Math.random() * (sides) + 1);
  }

  var quantity = parseInt(arr[0]) || 1 // OR statement fixes edge cases, ex: 'd4' will split into ['', '4']
  var sides = parseInt(arr[1]);
  var sum = 0;

  // rolls each dice and adds their value to total
  for (var i = 0; i < quantity; i++) {
    var result = rollDice(sides);
    console.log(`${sides} sided die rolled for total of ${result}`);
    sum += result;
  }

  return sum;
}
