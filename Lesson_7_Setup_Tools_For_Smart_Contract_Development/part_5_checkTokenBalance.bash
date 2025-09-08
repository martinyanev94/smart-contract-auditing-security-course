truffle console --network development
SimpleToken.deployed().then(function(instance) {
    return instance.balanceOf.call(accounts[0]);
}).then(function(balance) {
    console.log("Balance of account 0:", balance.toString());
});
