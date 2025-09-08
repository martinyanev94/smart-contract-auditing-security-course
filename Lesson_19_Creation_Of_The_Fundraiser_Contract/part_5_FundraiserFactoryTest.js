const FundraiserFactory = artifacts.require("FundraiserFactory");

contract("FundraiserFactory", (accounts) => {
    let factory;
    
    before(async () => {
        factory = await FundraiserFactory.deployed();
    });

    it("should create a fundraiser", async () => {
        await factory.createFundraiser({ from: accounts[0] });
        const fundraisers = await factory.fundraisers();
        assert.equal(fundraisers.length, 1);
    });
});
