
/**
 * NodeJS helps in writing non-blocking (async) code.
 * Asynchronous Code can be written by using:
 *  1. Callback
 *  2. Promises
 *  3. Async/Await
 *  4. Event (Publisher/Subscriber)
 */

// Reading a file Synchronously:

var fs = require('fs');

var dataFirst = fs.readFileSync("data-one.txt", "utf-8");
console.log(dataFirst);

var dataSecond = fs.readFileSync("data-two.txt", "utf-8");
console.log(dataSecond);


