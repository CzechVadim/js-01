//15. Инструкция if...else
//Задание
//Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
    //Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка 'You are adult'.
    //В противном случае должен выполняться блок else и записывается строка 'You are minor'.
//Тесты
    //Объявлена функция checkAge(age).
    //В выражении проверки возраста использован оператор >=.
    //Вызов checkAge(20) возвращает 'You are adult'.
    //Вызов checkAge(8) возвращает 'You are minor'.
    //Вызов checkAge(14) возвращает 'You are adult'.
    //Вызов checkAge(38) возвращает 'You are minor'.
function checkAge(age) {
  
  let message;
  
  if (age >= 18) {
    message = 'You are adult';
  } else {
    message = 'You are minor';
  }

  return message;
  
}



//16. --------------------------------------------------------------------------------------------------------------------------------------------
//Задание
//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
//Она объявляет два параметра, значения которых будут задаваться во время её вызова:
    //available - общее количество товаров на складе
    //ordered - единиц товара в заказе
//Используя ветвления дополни код функции так, что:
    //Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'Not enough goods in stock!'.
    //В противном случае записывается строка 'Order is processed, the manager will contact you'.
//Тесты
    //Объявлена функция checkStorage(available, ordered).
    //Вызов checkStorage(100, 50) возвращает 'Order is processed, the manager will contact you'.
    //Вызов checkStorage(100, 130) возвращает 'Not enough goods in stock!'.
    //Вызов checkStorage(200, 20) возвращает 'Order is processed, the manager will contact you'.
    //Вызов checkStorage(200, 150) возвращает 'Order is processed, the manager will contact you'.
    //Вызов checkStorage(150, 180) возвращает 'Not enough goods in stock!'.
function checkStorage(available, ordered) {
  let message;
  if (ordered > available) {
     message = 'Not enough goods in stock!';
  } else {
     message = 'Order is processed, the manager will contact you';
  }
  return message;
}



//17. Оператор присвоения с добавлением/вычитанием/умножением/делением --------------------------------------------------------------------------------
//Задание
//Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.
//Тесты
    //Значение переменной a равно 7.
    //Использован оператор +=.
    //Значение переменной b равно 6.
    //Использован оператор -=.
    //Значение переменной c равно 45.
    //Использован оператор *=.
    //Значение переменной d равно 2.
    //Использован оператор /=.
let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);



//18 Задание -----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.
//Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов
//и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
    //pricePerDroid - цена одного дроида;
    //orderedQuantity - кол-во заказанных дроидов;
    //customerCredits - сумма средств на счету клиента.
//Дополни её следующим функционалом:
    //Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
    //Добавь проверку сможет ли клиент оплатить заказ:
        //если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Not enough funds on the account!';
        //в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'You ordered <число> droids, <число> credits left on the account'.
//Тесты
    //Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
    //Вызов makeTransaction(3000, 5, 23000) возвращает 'You ordered 5 droids, 8000 credits left on the account'.
    //Вызов makeTransaction(1000, 3, 15000) возвращает 'You ordered 3 droids, 12000 credits left on the account'.
    //Вызов makeTransaction(5000, 10, 8000) возвращает 'Not enough funds on the account!'.
    //Вызов makeTransaction(2000, 8, 10000) возвращает 'Not enough funds on the account!'.
    //Вызов makeTransaction(500, 10, 5000) возвращает 'You ordered 10 droids, 0 credits left on the account'.
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  
  if (totalPrice > customerCredits) {
     message = 'Not enough funds on the account!';
  } else {
     message = `You ordered ${orderedQuantity} droids, ${customerCredits - totalPrice} credits left on the account`;
  }

  return message;
}



//19. Блок else...if ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Блок else...if позволяет добавить после else еще один оператор if с условием.
//В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.
//Задание
//Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
    //Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Canceled by user!'.
    //Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Welcome!'.
    //Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Access denied, wrong password!'.
//Тесты
    //Объявлена функция checkPassword(password).
    //Вызов checkPassword('mangohackzor') возвращает 'Access denied, wrong password!'.
    //Вызов checkPassword(null) возвращает 'Canceled by user!'.
    //Вызов checkPassword('polyhax') возвращает 'Access denied, wrong password!'.
    //Вызов checkPassword('jqueryismyjam') возвращает 'Welcome!'.
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message =  'Canceled by user!';
  } else if (password === 'jqueryismyjam') {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}



//20. Задание -----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
//Она объявляет два параметра, значения которых будут задаваться во время её вызова.
    //available - доступное количество товаров на складе
    //ordered - единиц товара в заказе
//Используя ветвления дополни код функции так, что:
    //Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка There are no products in the order yet.
    //Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'The order is too large, there are not enough items in stock!'.
    //В противном случае в переменную message присваевается строка 'The order is placed, the manager will contact you'.
//Тесты
    //Объявлена функция checkStorage(available, ordered).
    //Вызов checkStorage(100, 50) возвращает 'The order is placed, the manager will contact you'.
    //Вызов checkStorage(100, 130) возвращает 'The order is too large, there are not enough items in stock!'.
    //Вызов checkStorage(70, 0)возвращает 'There are no products in the order yet'.
    //Вызов checkStorage(200, 20) возвращает 'The order is placed, the manager will contact you'.
    //Вызов checkStorage(200, 250) возвращает 'The order is too large, there are not enough items in stock!'.
    //Вызов checkStorage(150, 0) возвращает 'There are no products in the order yet'.
function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message =  'There are no products in the order yet';
  } else if (ordered > available) {
    message = 'The order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is placed, the manager will contact you';
  }
  
  return message;
}