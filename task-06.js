"use strict";

let input = 0;
let total = 0;

do {
  input = prompt("Укажите число", "");
  let numInput = Number(input);
  total = numInput + total;
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
