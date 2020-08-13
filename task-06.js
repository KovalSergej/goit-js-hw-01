"use strict";

let input = 0;
let total = 0;

do {
  input = prompt("Укажите число");
  if (input !== null) {
  if (Number.isNaN(+input)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  total += +input;
} 
}while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
