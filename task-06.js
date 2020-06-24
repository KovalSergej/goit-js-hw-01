"use strict";

let input = 0;
let total = 0;

for (let i = 0; input !== null; i++) {
  input = prompt("Укажите число");
  let numInput = Number(input);
  total = numInput + total;
}
alert("Общая сумма чисел равна " + total);
