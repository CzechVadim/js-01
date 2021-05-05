//22. Логическое «ИЛИ» (оператор ||)
//Задание
//Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту.
//Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
//Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip',
//пользователь получит доступ. Результатом выражения проверки будет буль true или false.
//Тесты
    //Объявлена функция checkIfCanAccessContent(subType).
    //В выражении проверки использован оператор ||.
    //Вызов checkIfCanAccessContent('pro') возвращает true.
    //Вызов checkIfCanAccessContent('starter') возвращает false.
    //Вызов checkIfCanAccessContent('vip') возвращает true.
    //Вызов checkIfCanAccessContent('free') возвращает false.
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  return canAccessContent;
}



//23. Логическое «НЕ» (оператор !)
//Задание
//Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток.
//То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.
//Она объявляет три параметра, значения которых будут задаваться во время её вызова:
    //number - число, не вхождение которого проверяется
    //start - начало числового промежутка
    //end - конец числового промежутка
//Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
//Тесты
    //Объявлена функция isNumberNotInRange(start, end, number).
    //В выражении использован оператор !.
    //Вызов isNumberNotInRange(10, 30, 17) возвращает false.
    //Вызов isNumberNotInRange(10, 30, 5) возвращает true.
    //Вызов isNumberNotInRange(20, 50, 24) возвращает false.
    //Вызов isNumberNotInRange(20, 50, 76) возвращает true.
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}