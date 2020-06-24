"use strict";

let total = 0;
let ordered = 0;
let result = 0;

// order less
total = 10;
ordered = 3;
result =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров!";
console.log(result);

// order equal
total = 10;
ordered = 10;
result =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров!";
console.log(result);

// order bigger
total = 10;
ordered = 11;
result =
  total >= ordered
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно твоаров!";
console.log(result);
