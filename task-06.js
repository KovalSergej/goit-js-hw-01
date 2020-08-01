"use strict";

let input = 0;
let total = 0;


do {
  input = prompt("Укажите число");
  if (input === null) {
    break;
  }
  if (Number.isNaN(+input) === true) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  total = +input + total;

} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
