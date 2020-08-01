"use strict";

const deliveryChina = 100;
const deliveryChile = 250;
const deliveryAustralia = 170;
const deliveryIndia = 80;
const deliveryJamaica = 120;

let clientCountry = prompt("Укажите страну доставки");

if (clientCountry === null) {
  console.log("Отменено пользователем!");
} else {
  switch (clientCountry.toLowerCase()) {
    case "китай":
      console.log(
        `Доставка в ${clientCountry} будет стоить ${deliveryChina} кредитов.`
      );
      break;

    case "чили":
      console.log(
        `Доставка в ${clientCountry} будет стоить ${deliveryChile} кредитов.`
      );
      break;

    case "австралия":
      console.log(
        `Доставка в ${clientCountry} будет стоить ${deliveryAustralia} кредитов.`
      );
      break;

    case "индия":
      console.log(
        `Доставка в ${clientCountry} будет стоить ${deliveryIndia} кредитов.`
      );
      break;

    case "ямайка":
      console.log(
        `Доставка в ${clientCountry} будет стоить ${deliveryJamaica} кредитов.`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
