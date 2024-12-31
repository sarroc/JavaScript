//alert("it's working!");

//function dog() {
//console.log("woof woof woof");
//console.log("gimme treat now!");
//console.log("yawn, I am tired.");
//}
//dog();

//function greet(nickname) {
//console.log(nickname);
//console.log("Hi!");
//}

//function greet(nickname) {
//console.log(`Hi, ${nickname}!`);
//}

//function sum(x, y) {
//console.log(x + y);
//}

//function divide(x, y) {
//console.log(x / y);
//}

//function add(x, y) {
//console.log(x + y);
//}
//function add(x, y) {
//return x + y; //returns the value and function is done. Return stops any further execution of the function.
//}
//function isOrange(color) {
//if (color.toLowerCase() === "orange") {
//return true;
//} else {
//return false;
//}
//}

//function isOrange(color) {
//if (color.toLowerCase() === "orange") {
//return true;
//}
//return false;
//}
// else not required as return stops function.

//function isOrange(color) {
//return color.toLowerCase() === "orange";
//}
//only works for a simple yes or no situation.

//function containsPurple(arr) {
//for (let color of arr) {
//if (color === "purple" || color === "magenta") {
//return true;
//}
//}
//return false; //has to be placed here as last option so the we done with looping through the entire array.
//}

//  function isValidPassword(password, username) {
//    if (password.length < 8) {
//  return false;
//    }
//    if (password.indexOf(" ") !== -1) {
//  return false;
//    }
//    if (password.indexOf(username) !== -1) {
//    }
//    return true;
//  }

// function isValidPassword(password, username) {
//   if (
// password.length < 8 ||
// password.indexOf(" ") !== -1 ||
// password.indexOf(username) !== -1
//   ) {
// return false;
//   }
//   return true;
// } // shorter version of above function.

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const usesName = password.indexOf(username) !== -1;
//   if (tooShort || hasSpace || usesName) return false;
//   return true;
// } // version with variables
//

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const usesName = password.indexOf(username) !== -1;
//   if (!tooShort && !hasSpace && !usesName) return true;
//   return false;
// }

