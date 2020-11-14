
//Make lemonade recipe
  
var lemons = prompt("Let's make a lemonade stand! First we need to make lemonade.  How many lemons should we use?");
var sugar = prompt("Don't forget the sugar!  How many cups?");
var recipe = sugar / lemons;

if(recipe >= .25 && recipe <= .75) { //good recipe 
    alert("Yum!");
}

alert("OK!  Let's open shop!");

//get random temperature for the day
function getRandomTemp(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
    var temp = getRandomTemp(50, 100)
// identify the temp and comment based on temp and lemonade recipe
if (temp >= 85) {
    alert("It was a hot day! The temperature was " + temp + "!");
    if (recipe >= .25 && recipe <= .75) {
        alert("A hot day and a great recipe! You sold all of your lemonade!  Good job!");
    }
    else {
        alert("People were hot and thirsty but not crazy about your lemonade.  You still sold most it! Good job!");
    }

}
else if (temp >= 70) {
    alert("It was a nice " + temp + " degrees out today.")
    if (recipe >= .25 && recipe <= .75) {
        alert("You had a great recipe and nice weather.  You sold most of your lemonade!  Good job!");
    }
    else {
        alert("People were not crazy about your recipe.  You sold less than half of your lemonade!");
    }
}

else {
    alert("It was " + temp + " degrees today.");
    if (recipe >= .25 && recipe <= .75) {
        alert("You had a great recipe and but it was cool out.  You sold half of your lemonade!");
    }
    else {
        alert("People were not crazy about your recipe and it was cool out today.  You didn't sell much lemonade at all!");
    }
}
