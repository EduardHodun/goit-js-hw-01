const ADMIN_PASSWORD = "jqueryismyjam";
const message = prompt(`Введите пароль:`);

if (message === null) {
  alert(`Отменено пользователем!`);
} else if (message === ADMIN_PASSWORD) {
  alert(`Добро пожаловать!`);
} else {
  console.log(`Доступ запрещен, неверный пароль!`);
}
