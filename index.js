/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let age = 29
const votingAge = 18;

if (age > votingAge) {
    console.log("true");
} else {
    console.log("false")
}


// //Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let lightSwitch = "On";
let lightOn = false;

if (lightOn === false) {
    lightSwitch = "Off";
}
console.log(lightSwitch);




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let number = "1999";
Number(new Date("1999"));
console.log(number) 


//Task d: Write a function to multiply a*b 

// let a = 999;
// let b = 200;
// multipliedNumber = a * b;
// console.log(multipliedNumber);

function multiply(a,b) {
    return(a * b);
}
console.log(multiply(999,200))



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogYears(dYears,age){
    return(dYears * age);
}
console.log(dogYears(7,29));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996 
function dogFeeder(weight, age) {
    if (age >= 1) {
        if (weight <= 5) {
            return (weight * .05);
        } else if (weight <= 10) {
            return (weight * .04);
        } else if (weight <= 15) {
            return (weight * .03);
        } else {
            return (weight * .02);
        } 
    } else {
        if (age >= 2/12 && age < 4/12) {
            return (weight * .10);
        } else if (age >= 4/12 && age < 7/12) {
            return (weight * .05);
        } else if (age >= 7/12 && age < 12/12) {
            return (weight * .04)
        }
    }
}
console.log(dogFeeder(15, 1));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPapersSissors(shoot) {
    let phrase = "It's a draw!";
  
    let compChoice = Math.random();
  
    if (compChoice <= 0.33) {
      compChoice = "rock";
    } else if (compChoice > 0.33 && compChoice <= 0.66) {
      compChoice = "scissors";
    } else {
      compChoice = "paper";
    }
  
    if (compChoice === "rock") {
      if (shoot === "paper") {
        phrase = "You win";
      } else if (shoot === "scissors") {
        phrase = "You lose";
      }
    }
    if (compChoice === "scissors") {
      if (shoot === "rock") {
        phrase = "You win!";
      } else if (shoot === "paper") {
        phrase = "You lose!";
      }
    }
    if (compChoice === "paper") {
      if (shoot === "rock") {
        phrase = "You lose!";
      } else if (shoot === "scissors") {
        phrase = "You win!";
      }
    }
    return phrase;
  }
  
  rockPapersSissors("paper");



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function convert(a) {
    return a * 0.62;
}
console




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCM(a) {
    return a * 30.48;
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(a) {
    for (let i = a; i > 0; i--) {
      console.log(
        `${i} bottles of soda on the walll, ${i} bottles of soda, take one pass it around ${i--} bottlles of soda on the wall`
      );
    }
  }
  console.log(annoyingSong(99));




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function gradeCalc(a) {
    if (a >= 90 && a <= 100) {
      return "A";
    } else if (a >= 80 && a < 89) {
      return "B";
    } else if (a >= 70 && a < 79) {
      return "C";
    } else if (a >= 60 && a < 69) {
      return "D";
    } else {
      return "F";
    }
  }
  
  console.log(gradeCalc(85));

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let numVowels = 0;
  let lowerStr = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      numVowels++;
    }
  }
  return numVowels;
}

console.log(countVowels("Hello WOrld"));




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rockPapersSissors() {
    let shoot = prompt("Rock, Paper, or Scissors");
    let phrase = "It's a draw!";
  
    let compChoice = Math.random();
  
    if (compChoice <= 0.33) {
      compChoice = "rock";
    } else if (compChoice > 0.33 && compChoice <= 0.66) {
      compChoice = "scissors";
    } else {
      compChoice = "paper";
    }

    if (shoot !== "Rock" || shoot !== "Paper" || shoot !== "Scissors") {
        return "Pick from Rock Paper or Scissors";
    }
  
    if (compChoice === "rock") {
      if (shoot === "paper") {
        phrase = "You win";
      } else if (shoot === "scissors") {
        phrase = "You lose";
      }
    }
    if (compChoice === "scissors") {
      if (shoot === "rock") {
        phrase = "You win!";
      } else if (shoot === "paper") {
        phrase = "You lose!";
      }
    }
    if (compChoice === "paper") {
      if (shoot === "rock") {
        phrase = "You lose!";
      } else if (shoot === "scissors") {
        phrase = "You win!";
      }
    }
    return phrase;
  }
  
  rockPapersSissors("paper");
