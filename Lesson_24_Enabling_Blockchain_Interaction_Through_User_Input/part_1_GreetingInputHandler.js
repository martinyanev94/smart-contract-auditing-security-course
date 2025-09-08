this.state = {
    web3: null,
    accounts: null,
    contract: null,
    greeting: '',
    userInput: '' // New state variable for user input
};
<input
    type="text"
    value={this.state.userInput}
    onChange={this.handleInputChange}
/>
<button onClick={this.submitGreeting}>Set Greeting</button>
