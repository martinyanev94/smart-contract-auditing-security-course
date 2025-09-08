truffle migrate --reset
truffle console
let greeterInstance;
Greeter.deployed().then(instance => {
    greeterInstance = instance;
});
greeterInstance.setGreeting("Hello, world!").then(() => {
    console.log("Greeting set!");
});
greeterInstance.greet().then(greeting => {
    console.log("Your greeting is: ", greeting);
});
