// Write a js method, when user click on button, display random integer below it.

function randomNumber() {
  document.getElementById("rand").innerHTML = Math.round(Math.random() * 100);
}

// Write js function to format number up to specified decimal places.
function decimal(number) {
  console.log(number.toFixed(2));
}

decimal(1.1725);

// Check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
const string = "welcome to javascript";
const substring = "to";

console.log(string.toLowerCase().includes(substring.toLowerCase()));

// Given year leap year or not (29 in feb)
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

checkLeapYear(2000);

// ATM Machine and style it
// balance & query
// withdraw (amount)
// change pin
// mini statement
// saving & current acc.
// print receipt
// enter pin nunber

function submitPin() {
  //Intialise Pin value with varible P
  var p = document.getElementById("pin").value;
  var a = 1234;
  //To check Pin entered is correct or not
  if (p == a) {
    document.getElementById("demo").innerHTML = "Account Balances";
    document.getElementById("display").style.display = "block"; //if pin number is correct options will Display.
  } else {
    document.getElementById("demo").innerHTML = "Invalid pin";
  }
}

let savingAmt = (document.getElementById("savings").innerHTML = `$10,000`);
let currentAmt = (document.getElementById("current").innerHTML = `$5,000`);

// Add only even numbers in an array (array elements to be input by user)
let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
      sum = sum + numStr[i];
    }
  }
  return sum;
};

console.log(sumEvens(numStr));

// Found an element in array [10, 78, 90] return number, exit from an array// take user input
var ages = [10, 78, 90];

var remove = function (removeAge) {
  var index = ages.indexOf(removeAge);
  if (index > -1) {
    ages.splice(index, 1);
  }
};
remove(prompt("Enter age of the worker you wish to remove: "));
console.log(ages);

// Biggest of even number in an array [10, 12, 90, 93, 707]: biggest even number is 90
function max_even(arra) {
  arra.sort((x, y) => y - x);

  for (var i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0) return arra[i];
  }
}

console.log(max_even([10, 12, 90, 93, 707]));

// Add two array [10,20,30] + [1,2,3]: [11, 22, 33]
var array1 = [10, 20, 30];
var array2 = [1, 2, 3];

var newArray = array1.map((e, i) => e + array2[i]);
console.log(newArray);

// Reverse an array(with loops) [10, 78, 0]: [0, 78, 10]
var array3 = [10, 78, 0];
for (var i = array3.length - 1; i >= 0; i--) {
  console.log(array3[i]);
}
// Reverse a string using loops
function reverseStr(str) {
  var newString = "";
  for (var k = str.length - 1; k >= 0; k--) {
    newString += str[k];
  }
  return newString;
}

console.log(reverseStr("hello"));

// Remove duplicate items from an array [10, 50,20 67, 10, 20]: remove 10, 20
let arrayDuplicate = [10, 50, 20, 67, 10, 20];
let newArray1 = arrayDuplicate.filter((j, index) => {
  return arrayDuplicate.indexOf(j) === index;
});
console.log(newArray1);

// Find duplicate values in an array.(display index of duplicate values e.g. 0,2,4,5)
let arrDuplicate = [10, 10, 24, 24, 60, 61, 77];
let newArray2 = arrDuplicate.filter((h, index) => {
  return arrDuplicate.indexOf(h) !== index;
});

console.log(newArray2);

// Find difference/subtraction in 2 arrays //[12, 56, 789] - [12, 56, 789]: [0, 0, 0]
var arrayNew = [12, 56, 789];
var arrayOld = [12, 56, 789];

var newArray4 = arrayNew.map((e, i) => e - arrayOld[i]);
console.log(newArray4);

// Ask user, remove a specific element from an array [12, 56, 89]: remove 1 element
function removeOneItem(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(removeOneItem([12, 56, 89], 56));

// Get the largest odd and even number in an array [10, 12, 900, 93, 707].
function max_even(arrayList) {
  arrayList.sort((x, y) => y - x);

  for (var i = 0; i < arrayList.length; i++) {
    if (arrayList[i] % 2 == 0) return arrayList[i];
  }
}
function max_odd(arrayList) {
  arrayList.sort((x, y) => y - x);

  for (var i = 0; i < arrayList.length; i++) {
    if (arrayList[i] % 2 !== 0) return arrayList[i];
  }
}
console.log(max_even([10, 12, 90, 93, 707]));
console.log(max_odd([10, 12, 90, 93, 707]));

// Take 3 inputs from user and structure them into objects.
firstname = document.getElementById("firstname");
middlename = document.getElementById("middlename");
lastname = document.getElementById("lastname");

jsonText = document.getElementById("jsontext");

function jsonbtn() {
  data = {
    firstName: firstname.value,
    middleName: middlename.value,
    lastName: lastname.value,
  };
  document.getElementById("jsontext").innerHTML = JSON.stringify(data);
}

// Create a class Car: city(),specialFeature()
// name, brand, color, manufacture

class Car {
  constructor(name, brand, color, manufacture, specialFeature) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.manufacture = manufacture;
    this.specialFeature = specialFeature;
  }
  city() {
    let country = [America];
    return country;
  }
}

// Create a class Book: type_of_book()
// no. of pages, type of pages, author
class Book {
  constructor(pageNumbers, pageType, author, bookType) {
    this.pageNumbers = pageNumbers;
    this.pageType = pageType;
    this.author = author;
    this.bookType = bookType;
  }
}

// Create a class Animal: walk(), eat(), climb()
// gender, name, disease
class Animal {
  constructor(name, gender, disease) {
    this.name = name;
    this.gender = gender;
    this.disease = disease;
  }

  walk(move) {
    let fourLeg = 4;
    let twoLeg = 2;

    if (move == fourLeg) {
      console.log(`It can walk on 4 legs.`);
    } else if (move == twoLeg) {
      console.log(`It can walk on 2 legs`);
    } else {
      console.log(`It can't walk.`);
    }
  }

  eat(food) {
    if ((food = "vegetables")) {
      console.log(`Herbivore`);
    } else if ((food = "meat")) {
      console.log(`Carnivore`);
    } else {
      console.log(`Onmivore`);
    }
  }

  climb(tree) {
    if ((tree = "climbing")) {
      console.log(`It can climb`);
    } else {
      console.log(`It cannot climb`);
    }
  }
}

// Inheritance: parent electronics (methods: name, version, company name): childclass(laptop, ipad, mobile, tablet):
// class child {
// configuration()
// price()
// }
class Electronics {
  constructor(name, version, companyName) {
    this.name = name;
    this.version = version;
    this.companyName = companyName;
  }
}

class Laptop extends Electronics {
  constructor(name, version, companyName, price) {
    super(name, version, companyName);
    this.price = price;
  }
  configuration(size) {
    if (size > 1000) {
      console.log(`This is big.`);
    } else {
      console.log(`This is small.`);
    }
  }
}

class Ipad extends Electronics {
  constructor(name, version, companyName, price) {
    super(name, version, companyName);
    this.price = price;
  }
  configuration(size) {
    if (size > 1000) {
      console.log(`This is big.`);
    } else {
      console.log(`This is small.`);
    }
  }
}

class Mobile extends Electronics {
  constructor(name, version, companyName, price) {
    super(name, version, companyName);
    this.price = price;
  }
  configuration(size) {
    if (size > 500) {
      console.log(`This is big.`);
    } else {
      console.log(`This is small.`);
    }
  }
}

class Tablet extends Electronics {
  constructor(name, version, companyName, price) {
    super(name, version, companyName);
    this.price = price;
  }
  configuration(size) {
    if (size > 1000) {
      console.log(`This is big.`);
    } else {
      console.log(`This is small.`);
    }
  }
}
