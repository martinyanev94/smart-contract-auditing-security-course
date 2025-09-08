myContract.events.DonationReceived({
    filter: {donor: '0xYourAddress'}, 
    fromBlock: 0
}, function(error, event) {
    if (error) {
        console.error("Error fetching event:", error);
    } else {
        console.log("Donation received:", event.returnValues);
    }
});
