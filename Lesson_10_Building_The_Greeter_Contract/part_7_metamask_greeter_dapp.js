window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        alert("Please install MetaMask to use this DApp!");
        return;
    }

    const greeterAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
    const greeterABI = [...] // Add your contract ABI here

    const greeterContract = new web3.eth.Contract(greeterABI, greeterAddress);

    async function updateGreeting() {
        const greeting = await greeterContract.methods.greeting().call();
        document.getElementById('greeting').innerText = greeting;
    }

    document.getElementById('setGreetingBtn').onclick = async function() {
        const newGreeting = document.getElementById('newGreeting').value;
        const accounts = await web3.eth.getAccounts();
        await greeterContract.methods.setGreeting(newGreeting).send({ from: accounts[0] });
        updateGreeting();
    };

    updateGreeting();
});
