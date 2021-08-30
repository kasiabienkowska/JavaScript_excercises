// //MAP


// function map(array, callback) {
//     if (!Array.isArray(array)) {
//       throw new Error("You have to pass array as a first argument!");
//     }
  
//     if (typeof callback !== "function") {
//       throw new Error(`You have to pass function as a callback! You have passed type: ${typeof callback}`);
//     }
  
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       result.push(callback(array[i], i, array));
//     }
//     return result;
//   }
  
//   const array1 = [1, 2, 3];
  
//   const output = map(array1, function (el) {
//     return el * 2;
//   });
//   console.log(output);



// //FOR EACH

// function ourForEach(array, instructions){
//     for (let i=0; i < array.length; i++){
//         instructions(array[i], i, array);
//     }
// }

// function mojForEach(el){
//     console.log(el);
// }

// arr1 = [5,6,7]

// function ourForEach(array, instructions){
//     for (let i=0; i < array.length; i++){
//         instructions(array[i], i, array);
//     }
// }

// ourForEach(arr1, mojForEach);

// // sprawdzenie

// arr1.forEach(element => console.log(element));

// const newArr5 = [1,2,3,4,5].reduce((reducer,acc) => reducer + acc);  //15
// console.log([1,-2,3,4,5].reduce((reducer,acc)=>{
//     for (reducer>=0 && acc>=0); {
//         reducer + acc
//     }
// } 

// //FILTER


// function filter(array, callback) {
//     if (!Array.isArray(array)) {
//       throw new Error("You have to pass array as a first argument!");
//     }
  
//     if (typeof callback !== "function") {
//       throw new Error(`You have to pass function as a callback! You have passed type: ${typeof callback}`);
//     }
  
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       if (callback(array[i], i, array)) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }
  
//   const array1 = [1, 2, 3];
  
//   const output = filter(array1, function (el) {
//     return el >= 2;
//   });
//   console.log(output);


// //REDUCE


// function reduce(array, combiningFunction, startingIndex) {
//     let currentIndex = startingIndex
//     for (let element of array) {
//       currentIndex = combiningFunction(currentIndex, element);
//     }
//     return currentIndex;
//   }
  
//   console.log(reduce([1,2,3,4], (a, b) => a + b, 0));
//   // 10 


function race(text){
  console.log(text);
}
setTimeout(race(2), 1000);
