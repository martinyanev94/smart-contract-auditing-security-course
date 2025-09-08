npm install web3
import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/YOUR_INFURA_KEY"));

const greeterAddress = "DEPLOYED_CONTRACT_ADDRESS"; // Add your deployed contract's address
const greeterABI = [ /* ABI goes here */ ]; // Copy the ABI from your build/contracts folder

const greeterContract = new web3.eth.Contract(greeterABI, greeterAddress);

greeterContract.methods.greet().call()
  .then(greeting => {
    console.log("Greeting from Greeter Contract:", greeting);
  })
  .catch(error => {
    console.error("Error fetching greeting:", error);
  });
