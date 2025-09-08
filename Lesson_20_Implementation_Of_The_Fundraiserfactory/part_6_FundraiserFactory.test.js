const FundraiserFactory = artifacts.require("FundraiserFactory");
const Fundraiser = artifacts.require("Fundraiser");

contract("FundraiserFactory", (accounts) => {
    let factory;

    before(async () => {
        factory = await FundraiserFactory.new();
    });

    it("should create a fundraiser", async () => {
        await factory.createFundraiser({ from: accounts[0] });
        const fundraisers = await factory.fundraisers();
        assert.equal(fundraisers.length, 1);
    });

    it("should emit FundraiserCreated event", async () => {
        const tx = await factory.createFundraiser({ from: accounts[0] });
        const event = tx.logs[0].event;
        assert.equal(event, "FundraiserCreated");
    });
});
