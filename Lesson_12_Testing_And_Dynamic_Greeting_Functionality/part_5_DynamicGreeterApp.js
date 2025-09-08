import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Greeter from './Greeter.json'; // Import your ABI

const App = () => {
    const [account, setAccount] = useState('');
    const [greeting, setGreeting] = useState('');
    const [userGreeting, setUserGreeting] = useState('');

    useEffect(() => {
        const loadWeb3 = async () => {
            const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };

        loadWeb3();
    }, []);

    const handleGreetingChange = (event) => {
        setGreeting(event.target.value);
    };

    const submitGreeting = async (event) => {
        event.preventDefault();
        const contract = new web3.eth.Contract(Greeter.abi, 'YOUR_CONTRACT_ADDRESS');
        await contract.methods.setGreeting(greeting).send({ from: account });
        const greetingFromContract = await contract.methods.greet().call({ from: account });
        setUserGreeting(greetingFromContract);
    };

    return (
        <div>
            <h1>Dynamic Greeter</h1>
            <form onSubmit={submitGreeting}>
                <input
                    type="text"
                    value={greeting}
                    onChange={handleGreetingChange}
                    placeholder="Set your greeting"
                />
                <button type="submit">Submit</button>
            </form>
            <h2>Your greeting is: {userGreeting}</h2>
        </div>
    );
};

export default App;
