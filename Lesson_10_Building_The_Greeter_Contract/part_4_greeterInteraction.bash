truffle migrate
truffle console
let greeterInstance;
Greeter.deployed().then(instance => {
    greeterInstance = instance;
    return greeterInstance.greeting();
}).then(greeting => {
    console.log(greeting);
});
