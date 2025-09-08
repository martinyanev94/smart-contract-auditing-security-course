web3.eth.getBlockNumber()
    .then((blockNumber) => {
        console.log(`Current block number: ${blockNumber}`);
    })
    .catch(error => {
        console.error("Error fetching block number:", error);
    });
