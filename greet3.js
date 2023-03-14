// MODULO QUE EXPONE UN OBJETO CONSTRUIDO

function Greetr(){
    this.greeting = "Hello from the function constructor";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr;