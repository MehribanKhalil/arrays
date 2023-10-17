// let words='salam mehi'
// const sozler = words.split(' ')
// let soz='';

// for (let i = 0; i < sozler.length; i++) {
//     for (let j = sozler[i].length-1; j>=0; j--) {
//         soz +=sozler[i][j]

//     }

//     soz += '  '
// }

// console.log(soz);

// --------------------------------------------------------------

// let reverseword = " ";

// function func(soz) {
//   const sozler = soz.split(" ");
//   for (let i = 0; i < sozler.length; i++) {

//     reverseword += sozler[i].split("").reverse().join("") + " ";

//     console.log( reverseword);
//   }
//   return reverseword;

// }

// console.log(func("salam dunya sagol"));

// ---------------------------------------------------------

// const arr = [1, 2, 3, 6, 7, 10];
// let sayi = [];

// for (let i = 0; i < arr[arr.length - 1]; i++) {
//   if (i !== arr[i]) {
//     sayi.push(i);
//     arr.splice(i, 0, i);
//   }
// }
// console.log(sayi);

// ----------------------------------------------------------

// for (let i = 0; i < arr[arr.length - 1]; i++) {
//   if (! arr.includes(i)) {
//     sayi.push(i);

//   }
// }
// console.log(sayi);

// function hesabla( cb, ...arr) {
//   return cb(...arr)
// }

// function search(...arr) {
//   let olmayanData=[]
//   let result =[...arr]
//   for (let i = 0; i <result[result.length-1]; i++) {
//     if (! result.includes(i)) {

//       olmayanData.push(i);

//     }
//   }

//   return olmayanData
// }

// console.log(hesabla(search, 2,9));

// --------------------------------------------------

// function calcNums(...nums) {
//    const odd= nums.reduce((a, b) => (b % 2) !== 0 ?  a + b : a , 0);
//    const even= nums.reduce((a, b) => (b % 2) === 0 ?  a + b : a , 0);
//    return odd*even
// }

// function calc4(cb, ...nums) {
//   return cb(...nums);
// }

// const result = calc4(calcNums, 3, 1, 2 , 4);

// console.log(' hasil : ' + result);

// ---------------------------------------------

//26
// const arr =[1,2,3]
// arr.forEach ((i ,index) => i % 2!==0 ? console.log(index) : null )

//27
// const arr =[1,2,3]
// arr.forEach ((i ,index) => i % 2===0 ? console.log(index) : null )

// 30

// console.log(Math.max(2,4,5,9))

// 31
// console.log(Math.min(2,4,5,9))

// 32
// const arr =[1,2,3,4]
// console.log(Math.max(...arr.filter((x) => x % 2===0)));

// 33
// const arr =[1,2,3,4]
// console.log(Math.min(...arr.filter((x) => x % 2 ===0 )))

// 34
// const arr =[1,2,3,4]
// console.log(Math.max(...arr.filter((x)=>x % 2 !== 0 )))

// 36
// const arr =[1,2,3,4,0]
// console.log(arr.indexOf(Math.min(...arr)));

// 37
// const arr =[1,2,3,4,0]
// console.log(arr.indexOf(Math.max(...arr)));

// 38
// const arr =[1,4,2,3,4,0]
// let max=Math.max(...arr)
// let count = 0

// arr.forEach((x)=>(x===max) ? count++ :null)

// console.log(count);



// 40
// const arr = [1, 0, 2, 4, 2, 3, 0];
// let maxIndex = arr.indexOf(Math.max(...arr));
// let first = arr[0];

// arr[0] = arr[maxIndex];
// arr[maxIndex] = first;

// console.log(arr);




// 42
const arr = [1,2,3];
let minIndex=arr.indexOf(Math.min(...arr))
let maxIndex = arr.indexOf(Math.max(...arr)); 

[arr[minIndex] , arr [maxIndex] ] = [arr [maxIndex] , arr[minIndex]]
console.log(arr)



// 43
// const arr =[1,2,3,4,0]
// let cutIndex= arr.indexOf(Math.max(...arr.filter((x) => x % 2===0)));
// let tekIndex= arr.indexOf(Math.min(...arr.filter((x) => x % 2!==0)));

// [arr[cutIndex] , arr [tekIndex] ] = [arr [tekIndex] , arr[cutIndex]]
// console.log(arr)
