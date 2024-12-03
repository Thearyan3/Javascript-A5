// Question No. 1 - Write a program that takes an array as input from the user and find out the product of the elements. 

// function Find_Prod(){
//     let arrN = [1, 2, 3, 4, 5];
//     let product = 1;
//     for(let i = 0; i < arrN.length; i++){
//         product = product * arrN[i];
//     }
//     console.log(product);
// }
// Find_Prod();


// Question No. 2 - Write a program which takes an array as input from the user and find out the sum of the array elements.

// function Find_Sum(){
//     let arrS = [1, 2, 3, 4, 5];
//     let sum = 0;
//     for(let j = 0; j < arrS.length; j++){
//         sum = sum + arrS[j];
//     }
//     console.log(sum);
// }
// Find_Sum();


// Question No. 3 - You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.

let arr = [3, 3, 1, 2];
let count = 0;
let k = arr[0];
for(let i = 0; i < arr.length - 1; i++){
    // for(let j = 1; j <= arr.length; j++){
        if(arr[i] == k){
            count++;
        }
    // }
}
console.log(count);


// Question No. 4 - You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.  

// function findEvenOdd(){
//     let Num = [1, 2, 3, 4, 5, 6, 7];
//     let sumE = 0;
//     let sumO = 0;
//     for(let k = 0; k < Num.length; k++){
//         if(Num[k] % 2 == 0){
//             sumE += Num[k];
//         }else{
//             sumO += Num[k];
//         }
//     }
//     console.log(sumE, sumO);
// }
// findEvenOdd();


// Question No. 5 - Write a program which takes an array as input from the user and a number. Check whether the number is present or not. 

// function Find_Num(){
//     let NElements = [1, 2, 3, 4, 5];
//     let M = 7;
//     console.log(NElements.includes(M));
// }
// Find_Num();


// Question No. 6 - You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 1818 (18(18 included)). 

// function highAge(){
//     let arrA = [6, 11, 23, 3, 45, 72, 68];
//     let agedPersons = [];
//     for(let s = 0; s < arrA.length; s++){
//         if(arrA[s] >= 18){
//             agedPersons.push(arrA[s]);
//         }
//     }
//     console.log(agedPersons);
// }
// highAge();


// Question No. 7 - You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

// function Inc_Arr(){
//     let incArr = [1, 2, 3, 4, 5];
//     console.log(incArr.map(a => a + 1));
// }
// Inc_Arr();


// Question No. 8 - You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232. If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). 

// function isAllPass(){
//     let Marks = [13, 89, 45, 98, 67, 45, 54];
//     for(let m = 0; m < Marks.length; m++){
//         if(Marks[m] >= 32){
//             console.log("YES");
//         }else{
//             console.log("NO");
//         }
//     }
// }
// isAllPass();


// Question No. 9 - Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes towear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M. 

// function uniqueColor(){
//     let M = [3, 2, 4, 1, 2, 3];
//         M.filter(colors => colors[0] )
// }


// Question No. 10 - Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
// minimum and maximum numbers among those elements. 

// let arr = [66, 33, 11, 44, 66, 22, 77];
// let check = arr[0];
// let check2 = arr[0];
// for(let i = 0; i < arr.length; i++){
//     if(check >= arr[i]){
//         check = arr[i];
//     }else if(check2 <= arr[i]){
//         check2 = arr[i];
//     }
// }
// console.log(check, check2);