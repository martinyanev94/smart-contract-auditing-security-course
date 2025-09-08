async function init() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        await ethereum.enable();
        startApp();
    } else {
        alert("Please install MetaMask!");
    }
}

async function startApp() {
    const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE'; // Replace with your contract address
    const contractABI = [...] // Replace with your contract ABI from the compilation

    const simpleStorage = new web3.eth.Contract(contractABI, contractAddress);

    document.getElementById('setValue').addEventListener('click', async () => {
        const value = document.getElementById('value').value;
        const accounts = await web3.eth.getAccounts();
        await simpleStorage.methods.set(value).send({ from: accounts[0] });
        alert("Value set!");
    });

    document.getElementById('getValue').addEventListener('click', async () => {
        const result = await simpleStorage.methods.get().call();
        document.getElementById('result').innerText = `Stored Value: ${result}`;
    });
}

window.onload = init;
