const china = 100;
const chile = 250;
const australia = 170;
const india = 80;
const jamaica = 120;

let country = prompt(`Введе имя страны:`);
switch (country) {
  case "Китай":
    console.log(`Доставка в Китай будет стоить ${china} кредитов`);
    break;

  case "Чили":
    console.log(`Доставка в Чили будет стоить ${chile} кредитов`);

    break;

  case "Австралия ":
    console.log(`Доставка в Австралия будет стоить ${australia} кредитов`);

    break;

  case "Индия ":
    console.log(`Доставка в Индия будет стоить ${india} кредитов`);

    break;

  case "Ямайка":
    console.log(`Доставка в Ямайка будет стоить ${jamaica} кредитов`);

    break;

  default:
    console.log(`В вашей стране доставка не доступна`);
    alert(`В вашей стране доставка не доступна!`);
}
