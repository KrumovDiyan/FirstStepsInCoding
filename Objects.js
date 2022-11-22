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

