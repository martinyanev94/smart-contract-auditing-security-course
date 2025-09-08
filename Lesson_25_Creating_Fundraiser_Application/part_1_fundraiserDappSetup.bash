npx create-react-app fundraiser-dapp
cd fundraiser-dapp
npm install ethers
export const FUNDRAISER_ABI = [
    "function donate() public payable",
    "function getBalance() public view returns (uint256)"
];
