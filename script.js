//Given 2 arrays, create a function that let's a user know (true/false) whetther those arrays contain any common items.
//For example:
//const array1 = ['a', 'b','c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false
//------------
//const array1 = ['a', 'b','c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true

//2 parameters
// return true or false
// 2 inputs - 2 arrays (can ask interviewer will they always be arrays? could they be an object, a string, etc)

//Ask about the size of the array? 
//what is the goal? Are we worried about time complexity or space complexity? What is more important?

//Here its 2 inputs - 2 arrays - with no size limit

//Start with 1st thinkg that comes to mind- just speak about it (brute force)
//nested for loops? O(n^2) not most efficient

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; i++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false
// }

// console.log(containsCommonItem(array1, array2))

//O(a*b) - Time complexity
//O(1) - Space Complexity

//Returns true
//Why isn't this the best approach?
// Think O(n^2) but arrays are 2 different sizes so O(a*b)
//how to turn the O(a*b) into a more efficient solution

//Big O(a*b) - Time Complexity
//O(1) - Space Complexity

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

//array1 ==> obj {
//a: true, 
//b: true, 
//c: true, 
//x: true, 
//}
//array2[index] === obj.properties
//}

//Here the loops will NOT be nested and the Big O becomes a+b

//function containsCommonItem2(att1, arr2) {
// loop though first array and create oject where properties == items in the array
// loop through 2nd arraound and check if item in second array exists on created object.
//}

//O(a+b)

// function containsCommonItem2(arr1, arr2) {
//   let map = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[array1[i]]) {
//       const item = array1[i];
//       map[item] = true;
//     }
//   }
//console.log(map)
//returns Object {a: true, b: true, c: true, x: true}
// loop through 2nd arraound and check if item in second array exists on created object.
//}
//   for (let j = 0; j < arr2.length; j++) {
//     if (map[array2[j]]) {
//       return true;
//     }
//   }
//   return false
// }

//console.log(containsCommonItem2(array1, array2))

//Here we have 2 loops 1 afterr the other then have O(a+b) more efficient than nested loops O(n^2)

//O(a+b) is better with Time complexity

//For the containsCommonItem2
//O(a+b) - Time Complexity
//)(a) Space Complexity

//Look at breaking code? 2 'a' in array, string in array, empty array, null

//if don't get second array will get an error
//Tell interviewer poss solutions and ask questions about possible errors that may break it. 
//Can we always assume 2 params? What if put null in as an array2 or put 0?

//12. i and j are okay for forloops, but asked interviewer so that they know you are considering these things

//13. Let them know that 

//14. Tell interviewer how you would improve code. 
//Specific methods to clean up code depending on language can use built in JS methods to clean up code:
// function containsCommonItem3(arr1, arr2) {
//   return arr1.some(item => arr2.includes(item))
// }

// console.log(containsCommonItem3(array1, array2))

//15. Interviewer may ask what if too large?
//For containsCommonItem
//O(a*b) - Time complexity
//O(1) - Space Complexity

//For the containsCommonItem2
//O(a+b) - Time Complexity
//O(a) Space Complexity - Increased space complexity

//For the containsCommonItem2
//O(a+b) - Time Complexity
//)(a) Space Complexity

//9. Modularize code - chunk it up or break it up if need to.

//Question twosums:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// nums = [2, 7, 11, 15], target = 9

// var twoSum = function(nums, target) {
//   //iterate through the array to get i and j
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log[i, j]
//       }
//     }

//   }
// }
//time complexity =  O(n^2)
//space complexity = O(1) 

//Can have a time complexity = O(n)
//Space complexity = O(n) 
//if use a Hashmap

//same nums array above
nums = [2, 7, 11, 15], target = 9
// map = { 2:0, 7:1, 11:2, 15:3, }
// i = 0
// value = 1
// complementPair = 10-1 = 9

var twoSum = function(nums, target) {
  var map = {};
  for (let i = 0; i < nums.length; i++) {
      let value = nums[i];
      let complementPair = target - value;
      if (map [complementPair] !== undefined) {
        console.log([map[complementPair], i]);
        return [map[complementPair], i];
      } else {
        map[value] = i;
        console.log(map[value])
      }
  }
}