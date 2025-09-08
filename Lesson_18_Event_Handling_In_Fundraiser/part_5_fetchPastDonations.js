myContract.getPastEvents('DonationReceived', {
    filter: { donor: '0xYourAddress' },
    fromBlock: 0,
    toBlock: 'latest'
}, function(error, events) {
    if (error) {
        console.error("Error fetching past events:", error);
    } else {
        console.log("Past donations:", events);
    }
});
