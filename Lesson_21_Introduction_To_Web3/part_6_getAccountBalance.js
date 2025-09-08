const balancePromise = new Promise((resolve, reject) => {
    web3.eth.getBalance(accountAddress, (error, balance) => {
        if (error) {
            reject(error);
        } else {
            resolve(balance);
        }
    });
});

balancePromise
    .then(balance => {
        console.log(`Account balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
    })
    .catch(err => {
        console.error(`Could not fetch balance: ${err.message}`);
    });
