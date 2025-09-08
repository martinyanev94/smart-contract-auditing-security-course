myContract.events.DonationReceived()
    .on("data", function(event) {
        const amount = event.returnValues.amount;
        const donor = event.returnValues.donor;
        document.getElementById("donationStatus").innerText = `Thank you ${donor} for your donation of ${amount} Ether!`;
    })
    .on("error", console.error);
