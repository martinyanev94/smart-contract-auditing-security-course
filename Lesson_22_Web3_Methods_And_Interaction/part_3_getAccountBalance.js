const accountAddress = '0xa589BDa5379fDE626dD3eBF462fA22F5dfF43f30'; // Replace with your address

web3.eth.getBalance(accountAddress)
    .then(balance => {
        console.log(`Balance for address ${accountAddress}: ${web3.utils.fromWei(balance, 'ether')} ETH`);
    })
    .catch(error => {
        console.error("Error fetching balance:", error);
    });
