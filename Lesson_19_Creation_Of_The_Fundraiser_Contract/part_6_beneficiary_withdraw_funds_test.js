it("should allow beneficiary to withdraw funds", async () => {
    await factory.createFundraiser({ from: accounts[0] });
    const fundraisers = await factory.fundraisers();
    const fundraiser = Fundraiser.at(fundraisers[0]);
    
    await fundraiser.donate({ from: accounts[1], value: web3.utils.toWei("1", "ether") });
    await fundraiser.withdraw({ from: accounts[0] });
    
    const balance = await web3.eth.getBalance(fundraiser.address);
    assert.equal(balance, 0, "Beneficiary should withdraw all funds");
});
