import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { FUNDRAISER_ABI } from './contracts/Fundraiser';

const FundraiserApp = () => {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const init = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; 
            const contract = new ethers.Contract(contractAddress, FUNDRAISER_ABI, signer);

            setProvider(provider);
            setContract(contract);
            await fetchBalance(contract);
        };

        init();
    }, []);

    const fetchBalance = async (contract) => {
        const currentBalance = await contract.getBalance();
        setBalance(ethers.utils.formatEther(currentBalance));
    };

    return (
        <div>
            <h1>Fundraiser DApp</h1>
            <p>Total Funds Raised: {balance} ETH</p>
        </div>
    );
};

export default FundraiserApp;
