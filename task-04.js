"use strict";

let credits = 23580;
let pricePerDroid = 3000;

let quantityPerDroid = prompt("Сколько дроидов вы покупаете?");

if (quantityPerDroid === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = quantityPerDroid * pricePerDroid;
  if (totalPrice <= credits) {
    console.log(
      `Вы купили  ${quantityPerDroid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
