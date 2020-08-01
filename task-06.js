"use strict";

let input = 0;
let total = 0;

let inputToNumber;

do {
  input = prompt("Укажите число");
  if (input === null) {
    break;
  }
  inputToNumber = Number(input);
  if (Number.isNaN(inputToNumber) === true) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  total = inputToNumber + total;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
