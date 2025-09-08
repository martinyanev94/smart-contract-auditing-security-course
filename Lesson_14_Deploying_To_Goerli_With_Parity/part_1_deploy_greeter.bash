parity --config your_config.toml
truffle compile
const Greeter = artifacts.require("Greeter");

module.exports = function(deployer) {
  deployer.deploy(Greeter, "Hello, Goerli!");
};
