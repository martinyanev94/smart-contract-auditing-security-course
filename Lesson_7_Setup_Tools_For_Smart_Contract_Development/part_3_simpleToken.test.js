const SimpleToken = artifacts.require("SimpleToken");

contract("SimpleToken", (accounts) => {
    it("should put 1000 SimpleToken in the first account", async () => {
        const instance = await SimpleToken.deployed();
        const balance = await instance.balanceOf.call(accounts[0]);
        assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first account");
    });
});
truffle test
