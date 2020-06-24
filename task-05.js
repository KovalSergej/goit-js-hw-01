"use strict";

let deliveryPrice;
let clientCountry = prompt("Укажите страну доставки");

if (clientCountry === null) {
  console.log("Отменено пользователем!");
} else {
  let lowerCaseCountry = clientCountry.toLowerCase();
  switch (lowerCaseCountry) {
    case "китай":
      deliveryPrice = 100;
      console.log(
        "Доставка в " +
          clientCountry +
          " будет стоить " +
          deliveryPrice +
          " кредитов"
      );
      break;

    case "чили":
      deliveryPrice = 250;
      console.log(
        "Доставка в " +
          clientCountry +
          " будет стоить " +
          deliveryPrice +
          " кредитов"
      );
      break;

    case "австралия":
      deliveryPrice = 170;
      console.log(
        "Доставка в " +
          clientCountry +
          " будет стоить " +
          deliveryPrice +
          " кредитов"
      );
      break;

    case "индия":
      deliveryPrice = 80;
      console.log(
        "Доставка в " +
          clientCountry +
          " будет стоить " +
          deliveryPrice +
          " кредитов"
      );
      break;

    case "ямайка":
      deliveryPrice = 120;
      console.log(
        "Доставка в " +
          clientCountry +
          " будет стоить " +
          deliveryPrice +
          " кредитов"
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
