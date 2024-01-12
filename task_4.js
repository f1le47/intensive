function doSmth() {
  return Promise.resolve("123"); // Создаем функцию, которая возвращает resolve со строкой "123"
}

doSmth() // Вызываем функцию, она возвращает нам resolve, который перехватит первый then
  .then(function (a) { // в аргументе "a" будет строка "123"
    console.log("1", a); // выведет в консоль "1123" (1)
    return a; // вернет "123" снова в виде resolve()
  })
  .then(function (b) { // примет "123" в "b"
    console.log("2", b); // выведет в консоль "2123" (2)
  
    return Promise.reject("321"); // Возвращает reject со строкой "321", который будеть искать или then со вторым параметром, в который передаст значение
  })                              // или catch
  .catch(function (err) { // Перехватывает reject и в err получает строку "321"
    console.log("3", err); // Выводит в консоль "3321" (3)
  })
  .then(function (c) { // этот then выполнится по той причине, что catch также возвращает Promise.resolve(), но так как мы из catch мы ничего не возвращаем, "c" будет undefined
    console.log("4", c); // выведет в консоль "4undefined" (4)
    return c; // вернет undefined
  });