web3.eth.sendTransaction({
    from: '0xa589BDa5379fDE626dD3eBF462fA22F5dfF43f30',
    to: '0xa289BDa5379fDE626dM3eBF462fA22F5dfF43f31',
    value: web3.utils.toWei('0.1', 'ether')
})
    .then(transactionReceipt => {
        console.log(`Transaction successful with hash: ${transactionReceipt.transactionHash}`);
    })
    .catch(error => {
        if (error.message.includes("insufficient funds")) {
            console.error("Transaction failed: Not enough Ether");
        } else if (error.message.includes("Invalid address")) {
            console.error("Transaction failed: The provided address is not valid");
        } else {
            console.error("Transaction failed:", error.message);
        }
    });
