
//7.	Write a function that takes two parameters, word and n, as arguments 
//and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log("7.")

function getRepeatedWord(word, n) {
    var repeatedWord = "";
    while (n > 0) {
      repeatedWord += word;
      n--;
    }
    return repeatedWord;
  }

console.log(getRepeatedWord("Hello", 3))


//8.	Write a function that takes two parameters, firstName and lastName,
// and returns a full name (the full name should be the first and the last name separated by a space).
console.log("8.");
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(getFullName("Joe", "Schmoe"));


//9.	Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.

console.log("9.");

var numbers = [3, 54, 217]

function greaterThanAHundred() {
    var sum = 0
    for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
    if (sum > 100) {
        return true;
    } else {
        return false
    }
}
greaterThanAHundred();


//10.	Write a function that takes an array of numbers
// and returns the average of all the elements in the array.
console.log("10.");

var numbers = [3, 54, 21]

function getAverage() {
    var sum = 0
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    avNumber = sum / numbers.length;
    return avNumber;
    console.log(avNumber)
}
getAverage();


//11.	Write a function that takes two arrays of numbers and returns true 
//if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("11.")
//use function above to calculate average for arrays
var numbers1 = [4, 7, 2, 2]
var numbers2 = [4, 5, 3, 6]

function compareAverages() {
    var sum = 0
    for (i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    avNumber1 = sum / numbers1.length;

    let total = 0
    for (i = 0; i < numbers2.length; i++) {
        total += numbers2[i];
    }
    avNumber2 = total / numbers2.length;
console.log(avNumber1 > avNumber2) 
}

compareAverages();


//Create a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("12.");
function willBuyDrink(isHotOutside,moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
        console.log("You should buy a drink!");
    } else {
        return false;
        console.log("Too bad! Maybe there's a water fountain around here."); //alternate message
    }
}
willBuyDrink(true, 21); //true
willBuyDrink(false, 21); //false
willBuyDrink(true, 2); //false
willBuyDrink(false, 2); //false

//13.	Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.
console.log("13.")

function wantToPlay() {
    var bored = prompt("Bored?");
    if (bored == "yes") {
        alert("Let me suggest a game of Catan!");
    }  else  {
        alert("Great!  Have a nice day!");
        }
}
wantToPlay();

//I created this simple function to see if the user is bored and suggests a game if they are. 
// I created a big (but) simple version of Lemonade Stand before really reading the question.  Since I had games in mind, I decided to run with that!