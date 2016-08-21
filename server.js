'use strict';
var express = require('express');
var app = express();
var calculate = require('./library/calculate.js');

app.route('/test')
  .get((req, res) => {
    console.log('req received at /test');
    console.log(calculate('23'));
    console.log(calculate('2d4'));
    res.json('Hello world');
  });

app.route('/roll/:dice')
  .get((req, res) => {
    var input = req.params.dice;
    console.log(`Request received for ${input}`);
    var result = 0;
    input = input.split('+');
    input.forEach( ele => {
      result += calculate(ele);
    })
    console.log(`Result is ${result}`);
    res.json(result);
  })

app.listen(3000, () => {
  console.log('Server up at 3000');
})
