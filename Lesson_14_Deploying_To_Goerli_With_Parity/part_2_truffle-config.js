const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const infuraKey = "YOUR_INFURA_KEY"; // Replace with your Infura Project ID
const mnemonic = "YOUR_MNEMONIC"; // Replace with your wallet's mnemonic

module.exports = {
  networks: {
    goerli: {
      provider: () => 
        new HDWalletProvider(
          mnemonic,
          `https://goerli.infura.io/v3/${infuraKey}`
        ),
      network_id: 5,       // Goerli's id
      gas: 5500000,        // Gas limit
      confirmations: 2,    // # of confirmations to wait between deployments
      timeoutBlocks: 200,  // # of blocks before a deployment times out
      skipDryRun: true     // Skip dry run before migrations? (default: false for public networks)
    },
  },
};
truffle migrate --network goerli
