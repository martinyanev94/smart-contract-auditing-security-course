submitGreeting = async () => {
    const { accounts, contract, userInput } = this.state;
    await contract.methods.setGreeting(userInput).send({ from: accounts[0] });
    this.runExample(); // Refetch the updated greeting
    this.setState({ userInput: '' }); // Reset input
};
