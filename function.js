//7. Объявление и вызов функции ----------------------------------------------------------------------------------------------------------------------
//Объявление функции начинается с ключевого слова function, за которым идёт её имя - глагол отвечающий на вопрос «Что сделать?» и пара круглых скобок.
//Тело функции заключено в фигурные скобки {} и содержит инструкции, которые необходимо выполнить при её вызове.
//Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок.
//Задание
//Объяви функцию sayHi, внутри которой добавь console.log() со строкой 'Hello, this is my first function!'.
//После объявления вызови функцию sayHi.
//Тесты
    //Ожидается объявление Function Declaration.
    //Функции присвоено имя sayHi.
    //В теле функции sayHi есть console.log('Hello, this is my first function!').
    //После объявления есть вызов функции sayHi.
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();



//8. Параметры и аргументы -------------------------------------------------------------------------------------------------------
//В круглых скобках после имени функции идут параметры - перечисление данных, которые функция ожидает при вызове.
//Задание
//Функция add должна уметь складывать три числа и выводить результат в консоль.
//Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
//Дополни console.log() так, чтобы он логировал строку 'Addition result equals <result>', где <result> это сумма переданных чисел.
//Тесты
    //Объявлена функция add(a, b, c).
    //Вызов add(15, 27, 10) выводит в консоль 'Addition result equals 52'.
    //Вызов add(10, 20, 30) выводит в консоль 'Addition result equals 60'.
    //Вызов add(5, 10, 15) выводит в консоль 'Addition result equals 30'.
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);



//9. Возврат значения -----------------------------------------------------------------------------------
//Оператор return используется для передачи значения из тела функции во внешний код. 
//Задание
//Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.
//Тесты
    //Объявлена функция add(a, b, c).
    //В функции add есть оператор return.
    //Вызов add(15, 27, 10) возвращает 52.
    //Вызов add(10, 20, 30) возвращает 60.
    //Вызов add(5, 10, 15) возвращает 30.
    //Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
function add(a, b, c) {
  return a + b + c;
}

add(2, 5, 8);

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));


//10. Задание --------------------------------------------------------------------------------------------------------------------------
//Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
//Она объявляет два параметра, значения которых будут задаваться во время её вызова.
    //name - название товара
    //price - цена товара
//Дополни код функции так, чтобы в переменную message записывалась строка Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов,
//где <имя товара> и <цена товара> это значения параметров name и price. Используй синтаксис шаблонных строк.
//Тесты
    //Объявлена функция makeMessage(name, price).
    //Вызов makeMessage('Radar', 6150) возвращает 'You chose Radar, price per item is 6150 credits'.
    //Вызов makeMessage('Scanner', 3500) возвращает 'You chose Scanner, price per item is 3500 credits'.
    //Вызов makeMessage('Reactor', 8000) возвращает 'You chose Reactor, price per item is 8000 credits'.
    //Вызов makeMessage('Engine', 4070) возвращает 'You chose Engine, price per item is 4070 credits'.
function makeMessage (name, price) {
    const message = `You chose ${name}, price per item is ${price} credits`;
    return message;
};



//11. Задание --------------------------------------------------------------------------------------------------------------------------------------------
//Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.
    //orderedQuantity - количество единиц товара в заказе;
    //pricePerItem - цена одной единицы товара.
//Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.
//Тесты
    //Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem).
    //Вызов calculateTotalPrice(5, 100) возвращает 500.
    //Вызов calculateTotalPrice(8, 60) возвращает 480.
    //Вызов calculateTotalPrice('3, 400) возвращает 1200.
    //Вызов calculateTotalPrice(1, 3500) возвращает 3500.
    //Вызов calculateTotalPrice(12, 70) возвращает 840.
    //Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
};



//12 Задание --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов.
//Она объявляет три параметра, значения которых будут задаваться во время её вызова.
    //orderedQuantity - количество дроидов в заказе
    //pricePerDroid - цена одного дроида
    //deliveryFee - стоимость доставки
//Дополни код функции так, чтобы она возвращала сообщение о заказе в формате You ordered droids <сумма заказа> credits. Delivery (<цена доставки> credits) is included in order amount.
//Не забудь о цене доставки при вычислениях общей стоимости.
//Тесты
    //Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee).
    //Вызов makeOrderMessage(2, 100, 50) возвращает 'You ordered droids worth 250 credits. Delivery (50 credits) is included in the order amount.'.
    //Вызов makeOrderMessage(4, 300, 100) возвращает 'You ordered droids worth 1300 credits. Delivery (100 credits) is included in the order amount.'.
    //Вызов makeOrderMessage(10, 70, 200) возвращает 'You ordered droids worth 900 credits. Delivery (200 credits) is included in the order amount.'.
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  
  const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in the order amount.`;
  
  return message;
}



//13 Операторы сравнения >, >=, < и <= ----------------------------------------------------------------------------------------------------------------
//Задание
//Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова.
//Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.
//Тесты
    //Объявлена функция isAdult(age).
    //В выражении проверки используется оператор >=.
    //Вызов isAdult(20) возвращает true.
    //Вызов isAdult(14) возвращает false.
    //Вызов isAdult(8) возвращает false.
    //Вызов isAdult(37) возвращает true.
function isAdult(age) {
  const passed = age >= 18;
  return passed;
}



//14. Операторы сравнения === и !== -----------------------------------------------------------------------------------------------------------------------------------------------------------
//Задание
//Функция `isValidPassword(password)` проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль `true` или `false`.
//Переменная `SAVED_PASSWORD` хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр `password`.
//Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.
//Тесты
    //Объявлена функция isValidPassword(password).
    //В выражении проверки паролей использован оператор ===.
    //Вызов isValidPassword('mangodab3st') возвращает false.
    //Вызов isValidPassword('kiwirul3z') возвращает false.
    //Вызов isValidPassword('jqueryismyjam') возвращает true.
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === 'jqueryismyjam';
  return isMatch;
}




