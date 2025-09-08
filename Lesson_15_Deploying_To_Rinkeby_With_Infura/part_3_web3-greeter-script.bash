npm install web3
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID"));

const greeterAddress = "DEPLOYED_CONTRACT_ADDRESS"; // Add your deployed contract's address
const greeterABI = [ /* ABI goes here */ ]; // Copy the ABI from your build/contracts folder

const greeterContract = new web3.eth.Contract(greeterABI, greeterAddress);

async function greet() {
  const greeting = await greeterContract.methods.greet().call();
  console.log("Greeting from Greeter Contract:", greeting);
}

greet();
