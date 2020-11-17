//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.//
console.log("1.");

var ages = [3, 9, 23, 64, 2, 8, 28, 93]

//subtract first number from last

var lastAge= ages[ages.length - 1]  //finds last number in array when you don't know the length
console.log(lastAge - ages[0])


//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(72)
var lastAge= ages[ages.length - 1] 
console.log(lastAge - ages[0])

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
var totalAge = 0;
for (i = 0; i < ages.length; i++) {totalAge += ages[i];
}
var avAge = totalAge / ages.length;
console.log(avAge)


//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log("2.");
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

let lengths = names.map(function(element) {
    return element.length;
})
//console.log(lengths)
   
let totalLengths = 0
   for (i = 0; i < names.length; i++) {
       totalLengths += lengths[i]
   }
   var avNameLength = totalLengths / names.length
  
   console.log(avNameLength)
   
   //alternate method (no loop)
      
    let sum = lengths.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
    let average = sum / names.length;
    console.log(average);

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

var namesArrayLength = names.length;

var str = '';
for(var i=0; i<namesArrayLength; i++){
  str += names[i] + " ";
  }
  console.log(str);


console.log(names.join(" ")) //one-step method

console.log("3. Array.length - 1")

console.log("4. Array[0]")

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("5.")

var nameLengths = []
for (i = 0; i < names.length; i++) {
    nameLengths.push(lengths[i]);
}
console.log(nameLengths)


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
console.log("6.")

let lengthsSum = 0
   for (i = 0; i < names.length; i++) {
       lengthsSum += lengths[i]
   }
console.log(lengthsSum)
