require("./main.css");
require("./index.html");

let fn = async args => {
    const { a,b} = args
    await console.log("hi es6 webpack development...",a,b);
    console.log("Done");
}
fn({a:1,b:2});
 