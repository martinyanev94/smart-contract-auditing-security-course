<form>
  <label>
    New Greeting:
    <input
      type="text"
      value={this.state.greeting}
      onChange={this.handleGreetingChange}
    />
  </label>
</form>
<button onClick={this.formSubmitHandler}> Submit </button>
handleGreetingChange = (e) => {
  this.setState({ greeting: e.target.value });
};

formSubmitHandler = async () => {
  const { accounts, contract, greeting } = this.state;
  await contract.methods.setGreeting(greeting).send({ from: accounts[0] });
  this.runExample(); // to refresh the displayed greeting
};
