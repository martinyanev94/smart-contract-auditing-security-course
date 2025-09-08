async function requestWithdrawal() {
    await myContract.methods.withdraw().send({ from: accounts[0] });
}
