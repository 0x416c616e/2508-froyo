// functions ============================

function commaSeparatedStringToArray(str) {
  return str.split(",");
}

//for any arbitrary unique value, not just "vanilla", "strawberry", "chocolate", or "coffee"
function getUniqueValues(fullArray) {
  let uniques = [];
  for (let i = 0; i < fullArray.length; i++) {
    //blank input or ",,," will not be counted
    if (!uniques.includes(fullArray[i]) && fullArray[i].length !== 0) {
      uniques.push(fullArray[i]);
    }
  }
  return uniques;
}

function countFrequencyOfSingleValue(fullArray, valueToCount) {
  let count = 0;
  for (let i = 0; i < fullArray.length; i++) {
    if (fullArray[i] === valueToCount) {
      count++;
    }
  }
  return count;
}

//I did this after finishing it and looking at the requirements and then realizing I need to have something object-related instead of just a string
//so I implemented this but didn't really use it
function getObjAllValues(uniquesArray, fullArray) {
  freqObj = {};
  for (let i = 0; i < uniquesArray.length; i++) {
    freqObj[uniquesArray[i]] = countFrequencyOfSingleValue(
      fullArray,
      uniquesArray[i]
    );
  }
  return freqObj;
}

function getFreqStringAllValues(uniquesArray, fullArray) {
  let message = "You ordered ";
  for (let i = 0; i < uniquesArray.length; i++) {
    message +=
      countFrequencyOfSingleValue(fullArray, uniquesArray[i]) +
      " " +
      uniquesArray[i];

    if (i !== uniquesArray.length - 1) {
      message += ", ";
    }
    if (i === uniquesArray.length - 2) {
      message += "and ";
    }
  }
  if (message === "You ordered ") {
    message += "nothing";
  }
  return message;
}

//====================================

let flavorsInputString = prompt(
  "you are the millionth visitor! enter a comma-separated list of froyo flavors to win a free ipod!!!!!"
);

console.log(flavorsInputString);

let flavorsArray = commaSeparatedStringToArray(flavorsInputString);

console.log(flavorsArray);

let uniqueFlavors = getUniqueValues(flavorsArray);

console.log(uniqueFlavors);

let message = getFreqStringAllValues(uniqueFlavors, flavorsArray);

console.log(message);

alert(message);

console.log("aaaaaaaaaa");
console.log(JSON.stringify(getObjAllValues(uniqueFlavors, flavorsArray)));

//> Upon opening the website, a visitor receives a prompt to enter a list of comma-separated froyo flavors.
//> They type `vanilla,vanilla,vanilla,strawberry,coffee,coffee`.
//> In the browser console, they are able to see how many of each flavor they have ordered.
//> In this case, they observe that they have ordered three vanilla, two coffee, and one strawberry.
