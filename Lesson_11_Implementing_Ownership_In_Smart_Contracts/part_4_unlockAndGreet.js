const otherAccount = "0x..."; // Replace with the address of another account
web3.eth.personal.unlockAccount(otherAccount, "ganache", 0) // Unlocking the account for interaction

greeterInstance.setGreeting("Hello, from the other side!").send({ from: otherAccount }).then(() => {
    console.log("This shouldn’t happen!");
}).catch(err => {
    console.log("Expected error: ", err.message);
});
