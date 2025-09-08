runExample = async () => {
  const { accounts, contract } = this.state;
  const response = await contract.methods.greet().call();
  this.setState({ greeting: response });
};
async componentDidMount() {
  // Previous code...
  
  this.runExample();
}
render() {
  if (!this.state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="App">
      <h1>Greeter</h1>
      <p>{this.state.greeting}</p>
    </div>
  );
}
