
           // string-metodlari
     //       function repeat(str, num) {
     //           let result = "";
     //           for (let index = 0; index < num; index++) {
     //               result = result + str;
     //           }
     //           return result;
     //       }
       
     //       console.log(repeat('abcd', 3));
       
     //   function slice(array, start, end) {
     //           let Array =[];
     //           if(end===undefined || end > array.length)
     //             end = array.length;
             
     //           for (let i = start; i < end; i++) {
     //             Array.push(array[i]);
     //           }
     //           return Array;
     //         }
             
     //          console.log(slice(['m', 'a','d','i'],1,3));
       
       
       
     //          const indexOf =  function(stringToCheck, position) {
     //           let result=[];
     //             for (let i = 0; i < stringToCheck.length;i++) {
     //               if (stringToCheck[i] === position) {
     //                 result.push(i);
     //               }
     //             }
     //           console.log(result)
     //           }
               
     //           console.log(indexOf('My name is John', 'n'));






     // array metodlari

// let arr = ["banan", "olma", "gilos", "olcha", "anor", "uzum"]
// function pop(arr) {
//     return arr[arr.length - 1];
// }     
// console.log(pop(arr))



// let arr = ["banan", "olma", "gilos", "olcha", "anor", "uzum"]
// function push(arr, newItem){
// arr[arr.length]=newItem
// return arr
// }
// console.log(push(array, 'granat'))


// let arr = ["banan", "olma", "gilos", "olcha", "anor", "uzum"]
// function shift(arr){
//     for (let i = 1; i < arr.length; i++) {
//        result[i - 1] = arr[i]
//     }
//     return result
// }
// console.log(shift(arr));



// let arr = ["banan", "olma", "gilos", "olcha", "anor", "uzum"]
// function unshift(arr, newItem) {
//     for (let i = 0; i < arr.length; i++) {
//      result[i+1] = arr[i];
//     }
//     result[0] = newItem
//     return result;
// }
// console.log(unshift(arr, 'sam'))