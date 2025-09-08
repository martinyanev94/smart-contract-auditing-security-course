import GreeterContract from "./contracts/Greeter.json";
async componentDidMount() {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = GreeterContract.networks[networkId];

  const instance = new web3.eth.Contract(
    GreeterContract.abi,
    deployedNetwork && deployedNetwork.address,
  );

  this.setState({ web3, accounts, contract: instance });
}
