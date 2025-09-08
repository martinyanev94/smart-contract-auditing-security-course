web3.eth.sendTransaction({
    from: '0xa589BDa5379fDE626dD3eBF462fA22F5dfF43f30', // Sender’s address
    to: '0xa289BDa5379fDE626dM3eBF462fA22F5dfF43f31', // Receiver’s address
    value: web3.utils.toWei('1', 'ether')  // Converts "1" to Wei
}).then(transactionReceipt => {
    console.log(`Transaction successful with hash: ${transactionReceipt.transactionHash}`);
}).catch(error => {
    console.error(`Transaction failed: ${error.message}`);
});
