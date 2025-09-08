const Fundraiser = artifacts.require("Fundraiser");

contract("Fundraiser", accounts => {
    let fundraiser;

    beforeEach(async () => {
        fundraiser = await Fundraiser.new("Example Fundraiser", "http://example.com", "http://image.com", "A sample description", accounts[1], accounts[2]);
        await fundraiser.donate({ from: accounts[0], value: web3.utils.toWei("1", "ether") });
    });

    it("should allow the beneficiary to withdraw funds", async () => {
        await fundraiser.withdraw({ from: accounts[1] });
        const balance = await web3.eth.getBalance(fundraiser.address);
        assert.equal(balance, 0, "Balance should be zero after withdrawal");
    });
});
