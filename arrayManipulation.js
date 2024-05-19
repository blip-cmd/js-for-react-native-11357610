function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  
//   //task 1_test 
//   console.log(processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))  //output : [3,  4,  9, 16,  15, 36, 21, 64, 27, 100 ]
   
  