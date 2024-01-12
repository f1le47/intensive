console.log("1"); // Выполнится первым, так это синхронный код, который сразу уйдет в callstack и там выполнится (1)

setTimeout(function () {
  console.log("2"); // Выполнится последним, так как сначала setTimeout отправит колбэк в WEB API, который через 0мс отправит колбэк в очередь макротасок,
}, 0);              // где eventloop после проверки того, что callstack пуст, микротаски выполнены, перекинет колбэк в callstack (4)

Promise.resolve().then(() => console.log("3")); // Выполнится третьим, так как промис зарезолвится, после чего then уйдет в очередь микротасок,
                                                // когда eventloop увидит, что callstack пуст, то перейдет к очереди микротасок и отправит колбэк в callstack (3)

console.log("4"); // Выполнится вторым, так как setTimeout и then уйдут в WEB API и микротаски соответственно (2)

// То есть, порядок будет такой: 1 4 3 2