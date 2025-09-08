npm install -g truffle
const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "YOUR_INFURA_PROJECT_ID"; // Replace with your Infura Project ID
const mnemonic = "YOUR_MNEMONIC"; // Replace with your wallet's mnemonic

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Gas limit
      confirmations: 2,    // # of confirmations to wait between deployments
      timeoutBlocks: 200,  // # of blocks before a deployment times out
      skipDryRun: true     // Skip dry run before migrations? (default: false for public networks)
    },
  },
};
