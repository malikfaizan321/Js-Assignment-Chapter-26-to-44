//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 26 to 30.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

//Q no 1
// Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter a positive number");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("Number: ", number, "<br>");
// document.write("Round off value: ", roundOff, "<br>");
// document.write("Floor value: ", floor, "<br>");
// document.write("Ceil value: ", ceil, "<br>");

//Q no 2
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter a negative number");
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("Number: ", number, "<br>");
// document.write("Round off value: ", roundOff, "<br>");
// document.write("Floor value: ", floor, "<br>");
// document.write("Ceil value: ", ceil, "<br>");

//Q no 3
// Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = prompt("Enter a number");
// var absolute = Math.abs(number);
// document.write("The absolute value of " + number + " is " + absolute);

//Q no 4
// Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue);

//Q no 5
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var tossValue = Math.floor(Math.random() * 2) + 1;
// document.write(tossValue, "<br>");
// if (tossValue === 1) {
//   document.write("Random coin value: Tails");
// }
// else if (tossValue === 2) {
//   document.write("Random coin value: Heads");
// }

//Q no 6
// Write a program that shows a random number between 1 
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);

//Q no 7
// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//var weight = prompt("Enter Your weight: ");
//var parsedWeight = parseFloat(weight);
//document.write("The weight of user is " + parsedWeight + " kilograms");

//Q no 8
//var userNumber = +prompt("Enter a number between 1 and 10:");
//var secretNumber = Math.floor(Math.random() * 10 ) + 1;
//if(userNumber === secretNumber)
//{
//    alert("Wa0oow! Congratulation you are master mind...");
//}
//else
//{
//    alert("Ooopss! Sorry your secret number did'nt match so, please try again...")
//}


//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 31 to 34.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

//Q no 1
// Write a program that displays current date and time in
// your browser.

// var currentDate = new Date();
// document.write(currentDate);

//Q no 2
// Write a program that alerts the current month in words. 
// For example December.

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// var month = new Date().getMonth();
// document.write("Current Month: " + monthNames[month]);

//Q no 3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

//var weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//var currentWeek = new Date();
//alert("Today is: " + " " + weekNames[currentWeek.getDay()].slice(0,3));

//Q no 4
// Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// var day = new Date().getDay();
// if (day === 0 || day === 6) {
//   document.write("It's Fun day")
// }

//Q no 5
// Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var date = new Date().getDate();
// if (date < 16) {
//   document.write("First fifteen days of the month");
// }
// else if (date < 32) {
//   document.write("Last fifteen days of the month");
// }

//Q no 6
// Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var miliSeconds = Date.now();
// var currentDate = new Date(Date.now());
// var specificDate = new Date(1970, 0, 1);
// document.write("Current Date: ", currentDate, "<br>");
// document.write("Elapsed miliseconds since January 1, 1970: ", miliSeconds, "<br>");
// document.write("Elapsed minutes since January 1, 1970: ", miliSeconds / 6400);

//Q no 7
// Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var hours = new Date().getHours();
// if (hours <= 12) {
//   document.write("It's AM");
// } else {
//   document.write("It's PM")
// }

//Q no 8
// Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate, "<br>");

//Q no 9
// Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanDateDays = new Date(2015, 5, 1);
// var currentDate = new Date();
// var numberOfDays = Math.ceil((currentDate - ramadanDateDays) / 8.64e7);
// document.write(numberOfDays + " have passed sinse 1st Ramadan, 2015");

//Q no 10
// Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date();
// var referenceDateSeconds = referenceDate.getTime() / 1000;
// var specificDate = new Date(2015, 0, 1);
// console.log(referenceDateSeconds)
// var specificDateSeconds = specificDate.getTime() / 1000;
// console.log(specificDateSeconds)
// var secondsPassed = referenceDateSeconds - specificDateSeconds;
// document.write("On reference date " + referenceDate + ",<br>" + secondsPassed.toFixed(0) + " seconds have passed since " + specificDate);

//Q no 11
// Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var currentDate = new Date();
// var hours = currentDate.getHours();
// var hourAdded = currentDate.setHours(currentDate.getHours() + 1);
// var hourAhead = new Date(hourAdded);
// document.write(hourAhead);

//Q no 12
// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// var yearBack = new Date();
// yearBack.setFullYear(currentDate.getFullYear() - 100);
// document.write("Current date: " + currentDate + "<br>100 years back it was " + yearBack);

//Q no 13
// Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var userInput = +prompt("Enter your age");
// var currentDate = new Date();
// var currentDateYear = currentDate.getFullYear();
// var userBirthYear = currentDateYear - userInput;
// document.write("Your age is ", userInput, "<br> Your birth year is ", userBirthYear);

//Q no 14
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var customerName = prompt("Enter your name");
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"]
// var currentMonth = new Date().getMonth();
// currentMonth = monthNames[currentMonth];
// var units = 410;
// var rate = 16;
// var subCharge = 350;
// var amountPayable = units * rate;
// var amountPayableAfterDate = amountPayable + subCharge;
// document.write("<h1>Customer Name</h1>", "<br>");
// document.write("Customer Name: <strong>" + customerName, "</strong><br>");
// document.write("Month: <strong>" + currentMonth, "</strong><br>");
// document.write("Number of units: <strong>" + units, "</strong><br>");
// document.write("Charges per unit: <strong>" + rate, "</strong><br>");
// document.write("Net Amount Payable (within Due Date): <strong>" + amountPayable, "</strong><br>");
// document.write("Late payment subcharge: <strong>" + subCharge, "</strong><br>");
// document.write("Gross Amount Payable (after Due Date): <strong>" + amountPayableAfterDate, "</strong><br>");


//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 35 to 38.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

//Q no 1
// Write a function that displays current date & time in your
// browser.

// function showDate() {
//   var date = new Date();
//   document.write(date);
// }
// showDate();

//Q no 2
// Write a function that takes first & last name and then it 
// greets the user using his full name

// function greet() {
//   var firstName = prompt("Enter your first name");
//   var lastName = prompt("Enter your last name");
//   alert("Hello " + firstName + " " + lastName);
// }
// greet();

//Q no 3
// Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// function sum() {
//   var firstNumber = prompt("Enter first number");
//   var secondNumber = prompt("Enter second number");
//   var sum = firstNumber + secondNumber;
//   return sum;
// }
// sum();

//Q no 4
// Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function calculate(num1, num2, op) {
//   console.log(num1, num2, op)
//   switch (op) {
//     case "+":
//       console.log("Falled in switch")
//       return (num1 + num2);
//     case "-":
//       return (num1 - num2);
//     case "*":
//       return (num1 * num2);
//     case "/":
//       return (num1 / num2);
//     default:
//       return "Invalid Input";
//   }
// }
// var number1 = +prompt("Enter First number");
// var number2 = +prompt("Enter Second number");
// var operator = prompt("Enter the operator (valid inputs are : +, -, *, /)");
// var result = calculate(number1, number2, operator);
// document.write(result);

//Q no 4
// Write a function that squares its argument.

// function square(num) {
//   return num ** 2;
// }
// document.write("Num: 5<br>Square: " + square(5));

//Q no 6
// Write a function that computes factorial of a number.

// function fact(num) {
//   var factorial = 1;
//   for (var i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }
// document.write("Num: 5", "<br>", "Factorial: ", fact(5));

//Q no 7
// Write a function that take start and end number as inputs 
// & display counting in your browser.

// function count() {
//   var start = +prompt("Enter the start number");
//   var end = +prompt("Enter the end number");
//   document.write("Start number: " + start + "<br>End number: " + end + "<br>")
//   for (var i = start; i <= end; i++) {
//     document.write(i + "<br>");
//   }
// }
// count();

//Q no 8
// Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse(base, perpendicular) {
//   function square(num) {
//     return num ** 2;
//   }

//   var hypotenuse2 = square(base) + square(perpendicular);
//   var hypotenuse = Math.sqrt(hypotenuse2);
//   return hypotenuse;
// }

// var baseInput = +prompt("Enter the base of right angled triangle");
// var perpendicularInput = +prompt("Enter the perpendiculat of the right andled triangle");
// document.write("Base: " + baseInput + "<br>Perpendicular: " + perpendicularInput + "<br>" + calculateHypotenuse(baseInput, perpendicularInput));

//Q no 9
// Write a function that calculates the area of a rectangle.

// A = width * height

// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width, height) {
//   var area = width * height;
//   document.write("Width: " + width + "<br>Height: " + height + "<br>Area: " + area + "<br><br>");
// }
// var w = 10;
// var h = 4;
// area(5, 6);
// area(w, h);

//Q no 10
// Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

// function palindrome(word) {
//   var reversedWord = "";
//   for (var i = word.length - 1; i >= 0; i--) {
//     reversedWord += word[i];
//   }

//   if (word === reversedWord) {
//     document.write("The word is a palindrome");
//   } else {
//     document.write("The word is not a palindrome");
//   }
// }
// palindrome("madam");

//Q no 11
// Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titleCase(string) {
//   var stringArray = string.split(" ");
//   var transformedArray = [];
//   for (var i = 0; i < stringArray.length; i++) {
//     transformedArray[i] = stringArray[i][0].toUpperCase();
//     console.log(transformedArray[i])
//     transformedArray[i] = transformedArray[i] + stringArray[i].slice(1)
//   }
//   return transformedArray;
// }
// console.log(titleCase("this is a sentence"));

//Q no 12
// Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function longest(string) {
//   var stringArray = string.split(" ");
//   var longestWord = stringArray[0];
//   for (var i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].length > longestWord.length) {
//       longestWord = stringArray[i]
//     }
//   }
//   return longestWord;
// }
// alert(longest("Web Development Tutorial"))

//Q no 13
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments: 'JSResourceS.com', 'o'

// function countOccurence(string, letter) {
//   var occurrences = 0
//   for (var i = 0; i < string.length; i++) {
//     if (string[i] === letter) {
//       occurrences += 1;
//     }
//   }
//   return occurrences;
// }
// alert(countOccurence("JSResourceS.com", "o"));

//Q no 14
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(r) {
//   var circumference = 2 * (22 / 7) * r;
//   document.write("The circumference is " + circumference + "<br>");
// }
// function calcArea(r) {
//   var area = ((22 / 7) * (r ** 2));
//   document.write("The area is " + area);
// }
// calcCircumference(5);
// calcArea(5)

//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
// CHAPTER 38 to 44.....//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

//Q no 14
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//   return a ** b;
// }
// alert(power(2, 3));

//Q no 2
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function isLeap(year) {
//   var d = new Date(year, 1, 29);
//   if (d.getDate() === 29) {
//     alert("This year is a leap year");
//   } else {
//     alert("This year is not a leap year");
//   }
// }
// isLeap(2020);

//Q no 3
// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function area(a, b, c) {
//   function s(a, b, c) {
//     return (a + b + c) / 2;
//   }
//   var s = s(a, b, c);
//   return s * (s - a) * (s - b) * (s - c);
// }
// alert(area(2, 3, 4));


//Q no 4
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function averageOf(sub1, sub2, sub3) {
//   return (sub1 + sub2 + sub3) / 3;
// }
// function percentageOf(sub1, sub2, sub3, totalMarks) {
//   return ((sub1 + sub2 + sub3) / totalMarks) * 100;
// }
// (function mainFunction() {
//   var sub1 = +prompt("Enter marks of subject 1");
//   var sub2 = +prompt("Enter marks of subject 2");
//   var sub3 = +prompt("Enter marks of subject 3");
//   alert(
//     "The average marks are: " +
//       averageOf(sub1, sub2, sub3) +
//       ", whereas the percentage is: " +
//       percentageOf(sub1, sub2, sub3, 300) +
//       "%"
//   );
// })();

//Q no 5
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function myIndexOf(char, str) {
//   for (var i = 0; i < str.length; i++) {
//     if (char === str[i]) {
//       return i;
//     }
//   }
// }
// var ch = prompt("Enter the character");
// var st = prompt("Enter the string");
// alert("The index of letter " + ch + " in " + st + " is " + myIndexOf(ch, st));

//Q no 6
// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function removeVowel(str) {
//   if (str.length > 25) {
//     alert("The length of string is more than 25 characters");
//     return;
//   }
//   var strArray = str.split("");
//   strArray = strArray.filter(function (currChar) {
//     return !(
//       currChar === "a" ||
//       currChar === "e" ||
//       currChar === "i" ||
//       currChar === "o" ||
//       currChar === "u" ||
//       currChar === "A" ||
//       currChar === "E" ||
//       currChar === "I" ||
//       currChar === "O" ||
//       currChar === "U"
//     );
//   });
//   var strAltered = strArray.join("");
//   return strAltered;
// }
// var sentence = "This is a ran    dom sentence";
// alert("Before: " + sentence);
// if (removeVowel(sentence)) {
//   alert("After :" + removeVowel(sentence));
// }

//Q no 7
// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// function consecutiveVowelPointer(str) {
//   var pointerArray = [];
//   for (var i = 0; i < str.length - 1; i++) {
//     var chars = str[i] + str[i + 1];
//     switch (chars) {
//       case "aa":
//         pointerArray.push("aa");
//         break;
//       case "ae":
//         pointerArray.push("ae");
//         break;
//       case "ai":
//         pointerArray.push("ai");
//         break;
//       case "ao":
//         pointerArray.push("ao");
//         break;
//       case "au":
//         pointerArray.push("au");
//         break;
//       case "ea":
//         pointerArray.push("ea");
//         break;
//       case "ee":
//         pointerArray.push("ee");
//         break;
//       case "ei":
//         pointerArray.push("ei");
//         break;
//       case "eo":
//         pointerArray.push("eo");
//         break;
//       case "eu":
//         pointerArray.push("eu");
//         break;
//       case "ia":
//         pointerArray.push("ia");
//         break;
//       case "ie":
//         pointerArray.push("ie");
//         break;
//       case "ii":
//         pointerArray.push("ii");
//         break;
//       case "io":
//         pointerArray.push("io");
//         break;
//       case "iu":
//         pointerArray.push("iu");
//         break;
//       case "oa":
//         pointerArray.push("oa");
//         break;
//       case "oe":
//         pointerArray.push("oe");
//         break;
//       case "oi":
//         pointerArray.push("oi");
//         break;
//       case "ou":
//         pointerArray.push("ou");
//         break;
//       case "ua":
//         pointerArray.push("ua");
//         break;
//       case "ue":
//         pointerArray.push("ue");
//         break;
//       case "ui":
//         pointerArray.push("ui");
//         break;
//       case "uo":
//         pointerArray.push("uo");
//         break;
//       case "uu":
//         pointerArray.push("uu");
//         break;
//     }
//   }
//   var userFriendlyMessage =
//     "The occurrencies of two vowels in a succession are: ";
//   for (var j of pointerArray) {
//     if (j === pointerArray[pointerArray.length - 1]) {
//       return (userFriendlyMessage += j + ".");
//     }
//     userFriendlyMessage += j + ", ";
//   }
//   return userFriendlyMessage;
// }
// alert(consecutiveVowelPointer("Thaies ios ae riandom stroing"));

//Q no 8
// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var distance = +prompt("Enter the distance between two cities");
// function toMeters(distance) {
//   return distance * 1000;
// }
// function toFeet(distace) {
//   return distance * 3281;
// }
// function toInches(distance) {
//   return distance * 39370;
// }
// function toCentimeters(distace) {
//   return distance * 100000;
// }
// alert(
//   distance +
//     "km in meters is " +
//     toMeters(distance) +
//     ", in feet is " +
//     toFeet(distance) +
//     ", in inches is " +
//     toInches(distance) +
//     " and in centimeteres is " +
//     toCentimeters(distance)
// );

//Q no 9
// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function overTimePay(hours) {
//   var overTimeHours = hours - 40;
//   return overTimeHours * 12;
// }
// var hoursWorked = +prompt("Enter the total hours that employee has worked");
// alert("The overtime that should be paid is: " + overTimePay(hoursWorked));

//Q no 10
// A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function noteCalculator(amount) {
//   var amountLeft = amount;
//   var hundreds = Math.floor(amount / 100);
//   amountLeft -= hundreds * 100;
//   var fifties = Math.floor(amountLeft / 50);
//   amountLeft -= fifties * 50;
//   var tens = Math.floor(amountLeft / 10);
//   alert(
//     "You will have " +
//       hundreds +
//       " hundred note(s), " +
//       fifties +
//       " fifty note(s) and " +
//       tens +
//       " ten note(s)"
//   );
// }

// noteCalculator(+prompt("Enter the amount:"));