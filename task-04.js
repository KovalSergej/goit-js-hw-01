"use strict";

let credits = 23580;
let pricePerDroid = 3000;

let quantityPerDroid = prompt("Сколько дроидов вы покупаете?");

if (quantityPerDroid === null) {
  console.log("Отменено пользователем!");
} else {
  let toNumber = Number(quantityPerDroid);
  let isNumber = Number.isNaN(toNumber);
  if (isNumber === false) {
    let clearQuntity = Number.parseInt(quantityPerDroid);
    const totalPrice = clearQuntity * pricePerDroid;
    if (totalPrice <= credits) {
      credits = credits - totalPrice;
      console.log(
        "Вы купили " +
          clearQuntity +
          " дроидов, на счету осталось " +
          credits +
          " кредитов."
      );
    } else {
      console.log("Недостаточно средств на счету!");
    }
  } else {
    console.log("Введите число!");
  }
}
