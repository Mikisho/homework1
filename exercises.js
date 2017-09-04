//Do not change any of the function names

function multiplyByTen(num) {
  // return num after multiplying it by ten
  var product = num * 10;
  return product;// code here
}

function subtractFive(num) {
  // return num after subtracting five
  var differnce = num - 5;
  return differnce ;// code here
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length){
    return true;
  }
  return false;// code here
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  if (x === y){
    return true;
  }
  return false;// code here
}

function lessThanNinety(num) {
  // return true if num is less than ninety
  // otherwise return false
  if (num < 90){
    return true;
  }
  return false;// code here
}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50){
    return true;
  }
  return false;// code here
}

function add(x, y) {
  // add x and y together and return the value
 var sum = x + y;
 return sum;// code here
}

function subtract(x, y) {
  // subtract y from x and return the value
  var diff = x - y;
  return diff;// code here
}

function divide(x, y) {
  // divide x by y and return the value
  var div = x/y;
  return div;// code here
}

function multiply(x, y) {
  // multiply x by y and return the value
  var mult = x*y;
  return mult;// code here
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  var remainder = x%y;
  return remainder;// code here
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  if (num % 2 == 0){
    return true;
  }
  return false;// code here
}

function isOdd(num) {
  // return true if num is false
  // otherwise return false
  if (num % 2 !== 0){
    return true;
  }
  return false;// code here
}

function square(num) {
  // square num and return the new value
  var squ = num * num;
  return squ;// code here
}

function cube(num) {
  // cube num and return the new value
  var cubeRoot = Math.pow(num, 3);
  return cubeRoot;// code here
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  var power = Math.pow(num, exponent);
  return power;// code here
}

function roundNumber(num) {
  // round num and return it
  var round = Math.round(num);
  return round; // code here
}

function roundUp(num) {
  // round num up and return it
  var roundNum = Math.ceil(num);
  return roundNum;// code here
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  var addExclamation = str + '!';
  return addExclamation;// code here
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  var fullName = firstName + ' ' + lastName;
  return fullName;// code here
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  var greeting = 'Hello '+ name + '!';
  return greeting;// code here
}

// If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  //code here
  var areaRec = length* width;
  return areaRec;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
  var areaTri = 0.5*base*height;
  return areaTri;
}

function getCircleArea(radius) {
  // return the rounded area of the circle given the radius
  // code here
  var areaCir =Math.PI * radius*radius;
  return Math.round(areaCir);
}

function getRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  var vol = length*width*height;
  return vol;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
