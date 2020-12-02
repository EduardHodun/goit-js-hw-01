const credits = 23580;

const pricePerDroid = 3000;

let totalPrice;

let balance;

let input = prompt(`Введе количество дроидов:`);

if (input === null) {
  console.log(`Отменено пользователем!`);
} else {
  input = Number(input);
  totalPrice = input * pricePerDroid;
  balance = credits - totalPrice;
  console.log(`Вы купили ${input} дроидов, у вас на счету: ${balance}`);
}

if (balance <= pricePerDroid) {
  alert(
    `Недостаточно средств на счету!Вы купили ${input} дроидов, у вас на счету: ${balance}!`
  );
  //console.log(`Недостаточно средств на счету!`);
}
