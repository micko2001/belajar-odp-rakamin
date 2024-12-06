// let month = "January";
// let vehicle = 2024;

// let greetings = `Halo bulan ${month} tahun ${vehicle} `;
// let coba = `halo ${vehicle}`;
// let coba1 = parseFloat(coba);

// const kosong = null;
// const phi = 3.14;

// console.log(typeof undefined);

/*
apabila 1=="1" akan true
apabila 1==="1" akan false
*/

// let weight = 85;
// let height = 171;

// function BMI(weight, height) {
//   return weight / (height / 100) ** 2;
// }
// console.log(BMI(weight, height));

// apabila menggunakan conditional, mulai dari sepsifik sampai general

// for (let i = 1; i < 101; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }
let current = "";
let cur = 0;
const fizzBuzz = (num, cur, text) => {
  if (num < cur) {
    return text;
  }
  if (cur % 15 === 0) {
    text = text + " " + "FizzBuzz";
  } else if (cur % 5 === 0) {
    text = text + " " + "Buzz";
  } else if (cur % 3 === 0) {
    text = text + " " + "Fizz";
  } else {
    text = text + " " + cur;
  }

  return fizzBuzz(num, cur + 1, text);
};

const fizbuz = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    }
    if (i % 5 == 0) {
      console.log("Buzz");
    }
    if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};
//fizbuz(30);
// console.log(fizzBuzz(30, 1, ""));

const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const days = ["Sunday", "Monday", "Tuesday"];

// days.fill("senin");

// printArray(days);

const nums = [21, 100, 203, 41, 1, 3, 77];

const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let temp = i;
    for (let j = i + 1; j < nums.length + 1; j++) {
      if (nums[temp] > nums[j]) {
        temp = j;
      }
    }
    if (temp != i) {
      let value = 0;
      value = nums[i];
      nums[i] = nums[temp];
      nums[temp] = value;
    }
  }
  return nums;
};

function totalArr(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
function avgArr(nums) {
  return totalArr(nums) / nums.length;
}

let sortedArr = selectionSort(nums);

console.log("Total=" + totalArr(sortedArr));
console.log("Avg=" + avgArr(sortedArr));
console.log("Min =" + sortedArr[0]);
console.log("Max =" + sortedArr[sortedArr.length - 1]);
printArray(sortedArr);
// total, avg, min, max

/*
OOP
-Encapsulation --> sama seperti bungkus obat kapsul, dibungkus kapsul
agar tidak terlihat komposisi serbuk di dalamnya dan masih menjalankan
satu fungsi.




 */
