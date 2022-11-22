// JavaScript source code

/* 
 var myName = "Dido";
 var myAge = 29;

 console.log(myName + " and my age is: " + myAge);
 myAge++;
 console.log("Next year my age will be : " + myAge)

 var stS = "First Sentence. ";
 stS += "This is 2nd Sentence"
 console.log(stS);
*/

var stringTest = "bla";
console.log(stringTest.length);
console.log("stringTest variable has: " + stringTest.length + " letters " + "and the first letter is: " + stringTest[0]);


if (stringTest.length < 5) {
    console.log("This is not a valid word");
} else {
    console.log(stringTest);
}

var firstArray = ["Dido", 28];
console.log(firstArray[1]);
console.log(firstArray);
console.log(firstArray.length);
firstArray.push("newWord", 30);
console.log(firstArray);


function simpleCalculator(firstNumber, secondNumber) {
    var sum = firstNumber + secondNumber;
    var minus = firstNumber - secondNumber;
    var deletion = firstNumber / secondNumber;
    var mult = firstNumber * secondNumber;
    console.log(sum, minus, deletion, mult);
    /*return (sum, minus, deletion, mult);*/
}
simpleCalculator(22, 22);


function addToArray(nextItem) {
    var array = [1, 2, 3, 4, 5]
    console.log("Initial array is: " + array);
    array.push(nextItem);
    console.log("Array after nextItem is: " + array);

}
addToArray(5);

var a, b;
function comparationNumbers(a, b) {
    if (a > b) {
        true
    } else {
        if (a < b) {
            return false;
        }
    }
}
comparationNumbers(3, 11);

