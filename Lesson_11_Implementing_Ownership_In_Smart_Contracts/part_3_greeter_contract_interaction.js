let greeterInstance;
Greeter.deployed().then(instance => {
    greeterInstance = instance;
});
greeterInstance.getOwner().then(currentOwner => {
    console.log("Current owner is: ", currentOwner);
});
greeterInstance.setGreeting("Hello, Ethereum!").then(() => {
    greeterInstance.greeting().then(greeting => {
        console.log("Updated greeting: ", greeting);
    });
});
