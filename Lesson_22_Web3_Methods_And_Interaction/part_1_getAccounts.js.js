web3.eth.getAccounts()
    .then(accounts => {
        console.log("Accounts available:", accounts);
    })
    .catch(error => {
        console.error("Error retrieving accounts:", error);
    });
