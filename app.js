let greet = require("./greet1");
//let greet2 = require("./greet2").greet;
//const greet3 = require("./greet3"); //objeto construido/instanciado
//console.log(greet3);

const Greet4 = require("./greet4");
let myGreet = new Greet4();
myGreet.greet()


let greet2a = require("./greet2");
const { greeting} = require("./greet3");
let greet3 = require("./greet3");


greet();
//greet2();
greet2a.greet();


greet3.greet();
greet3.greeting = "Hello from the app";

let greet3b = require("./greet3");
greet3b.greet();

const greet5 = require("./greet5");
greet5.greet();
greet5.jump();
greet5.run();
