function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    //Cоздайте переменную message
//Присвойте переменной message значение переменной productName
//Добавьте в конец переменной message пробел
//Добавьте в конец переменной message текст 'за'
//добавьте в конец переменной message пробел
//Добавьте в конец переменной message значение переменной productPrice
//Добавьте в конец переменной message пробел
//Добавьте в конец переменной message текст 'теперь в корзине!'
//Выведите переменную message в консоль

    let message = productName;
    message = message 'за'
    message = message productPrice
    message = message 'теперь в корзине!'
    console.log(message)
    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    // создайте переменную newValue
    // присвойте ей значение oldValue
    // увеличьте значение newValue на 1

    let newValue = oldValue;
     newValue = newValue + 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    // создайте переменную newSum и присвойте ей сумму oldSum и difference
    // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    // замените склеивание, используемое в newSum Text на шаблонную строку

    let newSum = oldSum + difference;
    let newSumText = newSum + ' ₽';
    newSum = '$ {newSum} ₽';

    // Конец решения задания №1.3.

    return newSumText;
}

