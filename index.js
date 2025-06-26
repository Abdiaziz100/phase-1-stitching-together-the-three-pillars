// ✅ Fix for the "exists" test
var testVar = {};

// ✅ Function expression
const divide = function () {
  return 2000 / 100;
};

// ✅ Arrow function to square a number
const square = x => x * x;

// ✅ Arrow function to add two numbers
const add = (a, b) => a + b;

// ✅ Scuber fare greeting based on distance
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 400 && someValue <= 2000) {
    return "That will be twenty bucks.";
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// ✅ Ternary check based on city
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// ✅ Switch statement based on tip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
