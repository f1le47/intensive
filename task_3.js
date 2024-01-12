let promiseTwo = new Promise((resolve, reject) => {
  resolve("a"); // Промис резолвит "a", который вызовет then
});

promiseTwo
  .then((res) => {
    return res + "b"; // Этот then, так как он первый по очереди получит "a" в res, после чего он возвратит строку "ab",
  })                  // и так как then тоже возвращает промис, то его перехватит дальнейший then
  .then((res) => {
    return res + "с"; // тут then получает в res строку "ab" и возвращает уже "abc"
  })
  .finally((res) => {
    return res + "!!!!!!!"; // finally выполняется в порядке очереди, то есть где стоит там и выполнится, но finally ничего не принимает, ничего не возвращает,
  })                        // поэтому строка "abc" из последнего выполнившевогося then'а "провалится" в следующий then.
  .catch((res) => {
    return res + "d"; // catch не сработает, так как он реагирует на reject(), в нашем же случае then отдал resolve()
  })
  .then((res) => {
    console.log(res); // этот then получит в res строку "abc"
  });

  // Консоль выведет "abc"