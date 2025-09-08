const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const infuraKey = "YOUR_INFURA_KEY";
const mnemonic = "YOUR_MNEMONIC"; // Your wallet mnemonic phrase

const provider = new HDWalletProvider(
    mnemonic,
    `https://rinkeby.infura.io/v3/${infuraKey}`
);
const web3 = new Web3(provider);

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 7545, // Ganache port
            network_id: "*", // Any network (default: none)
        },
    },
    compilers: {
        solc: {
            version: "0.8.0" // Use specific version of Solidity
        }
    }
};
const SimpleToken = artifacts.require("SimpleToken");

module.exports = function(deployer) {
    deployer.deploy(SimpleToken);
};
truffle migrate --network development
