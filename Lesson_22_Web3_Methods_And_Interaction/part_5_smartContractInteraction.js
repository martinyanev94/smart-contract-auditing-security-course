const contractABI = [
    // ABI of the contract goes here
];
const contractAddress = "0xYourSmartContractAddressHere"; // Replace with your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);
contract.methods.getValue()
    .call()
    .then(result => {
        console.log("Value from contract:", result);
    })
    .catch(error => {
        console.error("Error calling contract method:", error);
    });
