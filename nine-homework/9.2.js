/*
  Вы разрабатываете калькулятор размещения в отеле для booking.com

  Без питания - 30$/день
  Завтрак - 50$/день
  Обед - 80$/день

  В зависимости от выбора посететеля (includBreakfast, includeLunch)
  посчитайте цену его размещения в день

  Пример:
  https://codepen.io/neizerth/pen/WNPZgjb?editors=0011
*/

// включать ли завтрак?
const includeBreakfast = true;
// включать ли обед?
const includeLunch = false;

// базовая цена размещения, 30$
let price = 30;

if (includeBreakfast) {
    // 1. увеличьте цену на 50
    price += 50;
}

if (includeLunch) {
    // 2. увеличьте цену на 80
    price += 80;
}

console.log(`Цена размещения в день: ${price}`);