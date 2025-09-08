greeterInstance.setGreeting("Hello, Ethereum!").send({ from: account1 });
greeterInstance.setGreeting("Greetings, Blockchain!").send({ from: account2 });
greeterInstance.greet().send({ from: account1 }).then(greeting => {
    console.log("Account 1 greeting: ", greeting);
});

greeterInstance.greet().send({ from: account2 }).then(greeting => {
    console.log("Account 2 greeting: ", greeting);
});
