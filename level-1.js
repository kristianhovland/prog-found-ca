// - Level 1
// Question 1

var animal = "lion";

// Question 2

var person = {
    name: "Kristian",
    age: 24
};

// Question 3

var outOfStock = true;
if(outOfStock === "true")  {
    console.log("Out of Stock")
}

else {
    console.log("In Stock")
}
;

// Question 4

var numbers = [17, 01, 11, 16, 43];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// Question 5

for (var i=15; i<=25; i++){
   console.log (i);
}


// Question 6

for (var i=15; i<=25; i++){
    if (i === 20){
        console.log(i);
    }
}

// Question 7 

var animalObject =  [
    {
        type: "Turtle"
        alive: true,
        age: "12"
    }, 
     {
        type: "Lion"
        alive: false,
        age: "9"

    console.log(animalObject[i].age)
    console.log(animalObject[i].alive)
    }
]


// Question 8 

function whatIDontLike(thisDrink) {
    console.log("I dont like " + thisDrink);
    }
    whatIDontLike("Pepsi Max");

// Question 9

function subtractTwoThree (number1, number2){
    var sum = number2 - number1;
    console.log(sum); 
    }
    subtractTwoThree(33, 21)

// question 10

var emptyArray = [];

function whatIWantEveryDay (IWantThis) {
  emptyArray.push(IWantThis);
}
whatIWantEveryDay("donuts");
