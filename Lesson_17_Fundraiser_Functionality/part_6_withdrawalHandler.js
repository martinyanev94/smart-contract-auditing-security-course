try {
    await myContract.methods.withdraw().send({ from: accounts[0] });
    alert('Withdrawal successful!');
} catch (error) {
    alert('Error during withdrawal: ' + error.message);
}
