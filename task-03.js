"use strict";

const ADMIN_PASSWORD = "qwerty";
const enteredPass = prompt("Please enter password");

if (enteredPass === null) {
  alert("Отменено пользователем!");
} else {
  let message =
    ADMIN_PASSWORD === enteredPass
      ? "Добро пожаловать!"
      : "Доступ запрещен, неверный пароль!";
  alert(message);
}
