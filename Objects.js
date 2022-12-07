// JavaScript source code
var myCar = {
    "model": "Mercedes",
    "Horse Power": "272",
    "Color": "Black",
    "Wheel Drive": ["4WD", "2WD"]
};

var carModel = myCar.model;
var hp = myCar["Horse Power"];
console.log(`The chosen car model is: ${carModel}` + "and it has: " + hp + "hp")

//add property
myCar.kw = "400";
//delete property
delete myCar.kw;


class Building() {
    floor = "2";
    building = "name";
}
console.log(floor)

/* Spred Operator */


const nummber = [1, 2, 3];
const newNumber = [...nummber, 4, 5, 6, 7];
console.log(newNumber);

const person = {
    name: "Dido",
    age: "30"
}
const newPerson = {
    ...person,
    height:"200cm"
}

/* array map */

const firstArray = [1, 2, 3];
const secondArray = firstArray.map((num) => { return num * 2; })
console.log(secondArray);

