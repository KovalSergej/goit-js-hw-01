"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const enteredPass = prompt("Please enter password");

if (enteredPass === null) {
  message = "Отменено пользователем!";
} else {
  message =
    ADMIN_PASSWORD === enteredPass
      ? "Добро пожаловать!"
      : "Доступ запрещен, неверный пароль!";
}
alert(message);
