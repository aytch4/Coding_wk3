//Write a function that takes an array of customer objects and returns a new array containing only the customers who have purchased more than 5 items.

function Customer (name, itemsPurchased) {
    this.name = name;
    this.itemsPurchased = itemsPurchased;
};


//I had no where near enough time to get to the bottom of question 9 and 10 on the quiz.
//I figured them out!  

var Customers = [
    new Customer("Tim", ["milk", "Coke", "butter", "chips"]),
    new Customer("Sam", ["flour", "sugar", "vanilla", "butter", "chocolate chips", "brown sugar"]),
    new Customer("Mom", ["turkey", "stuffing", "gravy"]),
    new Customer("Bob", ["potatoes", "green beans", "rolls", "squash", "pie", "crackers", "napkins"], )
]

let over5Items = Customers.filter(function(element) {
    return element.itemsPurchased.length > 5;
})

console.log (over5Items)

  
//Write a function that takes 2 arguments, an array of strings and a string. The function should return the index in the array that the stringis located.  If not found, it should give -1

const names = ["Bob", "Sue", "Sally", "Paul"]

const index = names.findIndex(name => name === "Paul");

console.log(index)
