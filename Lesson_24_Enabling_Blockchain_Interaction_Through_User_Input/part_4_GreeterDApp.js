render() {
    if (!this.state.web3) {
        return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
        <div className="App">
            <h1>Greeter DApp</h1>
            <p>Current Greeting: {this.state.greeting}</p>
            <input
                type="text"
                value={this.state.userInput}
                onChange={this.handleInputChange}
            />
            <button onClick={this.submitGreeting}>Set Greeting</button>
        </div>
    );
}
