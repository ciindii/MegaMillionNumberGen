

// function createRandomList() {
//   let nums = [];
//   for (let i = 0; 10 < i; i++) {
//     function random100() {
//       return Math.floor(Math.random() * 100) + 1;
//     }
//   } return nums;
// }
//
// let myRandomList = createRandomList();
// console.log(myRandomList);

function random70() {
  return Math.floor(Math.random() * 70) + 1;
}

function random25() {
  return Math.floor(Math.random() * 25) + 1;
}

function createRandom5() {
  let nums = [];
  for (let i = 0; i < 5; i++) {
    nums.push(random70());
  }

  return nums;
};

function createRandom1() {
  let nums = [];
  for (let i = 0; i < 1; i++) {
    nums.push(random25());
  }

  return nums;
}

let num5 = createRandom5();
let num1 = createRandom1();
console.log('Your Mega Million numbers are: ' + num5 + ' ' + num1);

// for (let i = 0; i < myRandomList.length; i++) {
//   console.log('Item ' + i + ' in the array is ' + myRandomList[i]);
// }
