handleInputChange = (event) => {
    this.setState({ userInput: event.target.value });
};
submitGreeting = async () => {
    const { accounts, contract, userInput } = this.state;
    await contract.methods.setGreeting(userInput).send({ from: accounts[0] });
    this.setState({ greeting: userInput, userInput: '' }); // Reset input and update greeting
};
