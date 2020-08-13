"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const enteredPass = prompt("Please enter password");

if (enteredPass === null) {
  message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === enteredPass) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
