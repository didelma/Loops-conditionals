//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)

//Part 1 write a loop from 0 to 10 that will be multiplied by 9
let mult = 9;
for (let i = 0; i <= 10; i++) {
  let result = mult * i;
  console.log(`${mult} * ${i} = ${result}`);
  // console.log(multiplyAll(* 9);
}

//BONUS PROBLEM Part 2: Use a nested for loop from 0 to 10 that will be multiplied times 10
let mult2 = 10;

for (let mult2 = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    const result2 = mult2 * j;
    console.log(`${mult2} * ${j} = ${result2}`);

  }

}


//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
let i = 0
while (i < 50) {
  console.log(i += 5);
}



//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
function duplicateNumber(repnum) {
  let dupleft = repnum[0]

  for (let i = 1; i < repnum.length; i++) {
    for (let j = i; j < repnum.length; j++) {
      if (dupleft === repnum[j]) {
        return repnum[j];
      }
      else {
        dupleft = repnum[i]
      }
    }
  }
}

console.log(`The duplicated number is: ${duplicateNumber([2, 7, 5, 5, 8, 3])}`)



//Remembering the results from the conditionals exercise on Monday
//use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..

function assignGrade() {

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

  }
  if (score > 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 65) {
    return 'D';
  } else {
    return 'F';
  }
}
console.log(`For ${assignGrade(88)}, you got a `);
