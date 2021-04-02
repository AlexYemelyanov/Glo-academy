let num = 266219,
  arr = [],
  sNumber = num.toString();
console.log(sNumber);

for (let i = 0, len = sNumber.length; i < len; i += 1) {
  arr.push(+sNumber.charAt(i));
}

let multiNum = arr.reduce((sum, current) => {
  return sum * current;
});
console.log(multiNum);
let expNum = multiNum ** 3;

let firstNums = expNum.toString();
console.log(firstNums.slice(0, 2));