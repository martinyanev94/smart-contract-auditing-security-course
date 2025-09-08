const SimpleWallet = artifacts.require("SimpleWallet");

contract("SimpleWallet", (accounts) => {
    it("should allow depositing ether", async () => {
        const wallet = await SimpleWallet.deployed();
        await wallet.deposit({ from: accounts[0], value: web3.utils.toWei("1", "ether") });
        const balance = await wallet.balances(accounts[0]);
        assert.equal(balance.toString(), web3.utils.toWei("1", "ether"), "1 ether was not deposited");
    });
    
    it("should allow withdrawing ether", async () => {
        const wallet = await SimpleWallet.deployed();
        await wallet.withdraw(web3.utils.toWei("1", "ether"), { from: accounts[0] });
        const balance = await wallet.balances(accounts[0]);
        assert.equal(balance.toString(), "0", "Ether was not withdrawn correctly");
    });
});
