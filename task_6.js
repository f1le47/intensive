const numArr = [10, 12, 15, 21];

// 2 решение
let currIndex = 0;
const interval = setInterval(() => {
  if (currIndex >= numArr.length - 1) {
    clearInterval(interval);
  }

  console.log(numArr[currIndex]);
  currIndex += 1;
}, 3000)

// 3 решение
async function logIndexAfterPrevious(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((res, rej) => {
      setTimeout(() => {
        console.log(arr[i]);

        res();
      }, 3000)
    })
  }
}

logIndexAfterPrevious(numArr);