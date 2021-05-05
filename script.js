//1. Объявление переменных <ключевое слово> <имя переменной> = <значение> -------------------------
//Задание
//Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
//При объявлении присвой переменным следующие характеристики товара:
//название - строка 'Droid';
//цена за штуку - число 2000.
//Тесты
  //Объявлена переменная productName.
  //Значение переменной productName это строка 'Droid'.
  //Объявлена переменная pricePerItem.
  //Значение переменной pricePerItem это число 2000.
const productName = 'Droid';
const pricePerItem = 2000;
console.log(productName);
console.log(pricePerItem);



//2. Переопределение значения переменной --------------------------------------------------------------------------------------
//Для того, чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово let.
//Задание
//Имя товара изменили на 'Repair droid' и увеличили его цену на 1500 кредитов.
//Переопредели значения переменных pricePerItem и productName после их объявления.
//Тесты
  //Переменная pricePerItem объявлена с помощью let.
  //При объявлении переменной pricePerItem присвоено значение число 2000.
  //Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500.
  //Переменная productName объявлена с помощью let.
  //При объявлении переменной productName присвоено значение - строка 'Droid'.
  //Переменной productName присвоено новое значение - строка 'Repair droid'.
let productName = 'Droid';
let pricePerItem = 2000;

productName = 'Repair droid';
pricePerItem = 3500;

console.log(productName);
console.log(pricePerItem);



//3. Типы примитивов (числа, строки, були) -----------------------------------------------------------------------------------------------------------------------------------
//Переменная может хранить значения разных типов:
//-Number - целые числа и числа с плавающей запятой (точкой).
//-String - строки, последовательность из нуля или более символов. Строка начинается и заканчивается одиночной ' или двойными кавычками ".
//-Boolean - логический тип данных, флаги состояния. Всего два значения: true и false. Например, на вопрос включен ли свет в комнате можно ответить да (true) или нет (false).
//Задание
//Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.
//topSpeed - число 160.
//distance - число 617.54.
//login - строка 'mango935'.
//isOnline - буль true.
//isAdmin - буль false.
//Тесты
  //Объявлена переменная topSpeed.
  //Значение переменной topSpeed это число 160.
  //Объявлена переменная distance.
  //Значение переменной distance это число 617.54.
  //Объявлена переменная login.
  //Значение переменной login это строка 'mango935'.
  //Объявлена переменная isOnline.
  //Значение переменной isOnline это буль true.
  //Объявлена переменная isAdmin.
  //Значение переменной isAdmin это буль false.
const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

console.log(topSpeed);
console.log(distance);
console.log(login);
console.log(isOnline);
console.log(isAdmin);



//4. Математические операторы + - * / ----------------------------------------------------------------------------
//Задание
//Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
//Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.
//Тесты
  //Объявлена переменная pricePerItem.
  //Значение переменной pricePerItem это число 3500.
  //Объявлена переменная orderedQuantity.
  //Значение переменной orderedQuantity это число 4.
  //Объявлена переменная totalPrice.
  //Значение переменной totalPrice это число 14000.
  //Использован оператор *.
const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;

console.log(totalPrice);



//5. Шаблонные строки ---------------------------------------------------------------------------------------------------------------------------
//Шаблонные строки это альтернатива конкатенации для соединения значений переменных друг с другом, или строк со строками.
//Задание
//Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов.
//Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.
//Тесты
  //Объявлена переменная productName.
  //Значение переменной productName это строка 'Дроид'.
  //Объявлена переменная pricePerItem.
  //Значение переменной price это число 3500.
  //Объявлена переменная message.
  //Значение переменной message это строка 'You chose droid, price per item is 3500 credits' (обрати внимание на отсутствие точки в конце строки).
const productName = 'Droid';
const pricePerItem = 3500;

const message = `You chose ${productName}, price per item is ${pricePerItem} credits`;

console.log(message);



//6. Задание ------------------------------------------------------------------------------------------------------------------------------------------------------
//Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
  //pricePerDroid - цена одного дроида, значение 800;
  //orderedQuantity - количество дроидов в заказе, значение 6;
  //deliveryFee - стоимость доставки, значение 50;
  //totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
  //message - сообщение о состоянии заказа в формате; You ordered droids worth <order amount> credits. Delivery (<delivery price> credits) included in order amount.
//Тесты
  //Объявлена переменная orderedQuantity.
  //Значение переменной orderedQuantity это число 6.
  //Объявлена переменная pricePerDroid.
  //Значение переменной pricePerDroid это число 800.
  //Объявлена переменная deliveryFee.
  //Значение переменной deliveryFee это число 50.
  //Объявлена переменная totalPrice.
  //Значение переменной totalPrice это число 4850.
  //Объявлена переменная message.
  //Значение переменной message это строка 'You ordered droids worth 4850 credits. Delivery (50 credits) included in the order amount.'
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) included in the order amount.`

console.log(pricePerDroid, orderedQuantity, deliveryFee, totalPrice, message);