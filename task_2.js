let promiseTree = new Promise((resolve, reject) => {
  resolve("a");

  console.log("1"); // Выполнится первым, так как сам промис синхронный, поэтому console.log отправится в callstack и выполнится (1)

  setTimeout(() => {
    console.log("2"); // Выполнится последним, так как сначала setTimeout отправит колбэк в WEB API, после чего WEB API закинет колбэк в макротаску, (3)
  }, 0);              // когда весь callstack освободится, проверит, что микротасок нет, он перейдет к макротаскам и отправит колбэк в callstack.

  console.log("3"); // Выполнится вторым, а не третьим, так как setTimeout закинет колбэк в WEB API (2)
});

