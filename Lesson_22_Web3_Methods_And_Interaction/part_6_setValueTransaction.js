contract.methods.setValue(10) // Assuming setValue is a function that takes an integer
    .send({ from: '0xa589BDa5379fDE626dD3eBF462fA22F5dfF43f30' })
    .then(transactionReceipt => {
        console.log(`Transaction successful with hash: ${transactionReceipt.transactionHash}`);
    })
    .catch(error => {
        console.error("Transaction failed:", error);
    });
