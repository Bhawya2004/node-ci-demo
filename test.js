const add = require("./index");

if (add(3, 3) === 5) {
  console.log("Test passed successfully");
} else {
  throw new Error("Test failed");
}