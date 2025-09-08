import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { FUNDRAISER_ABI } from './contracts/Fundraiser';
import FundraiserList from './FundraiserList'; // Make sure to import your new component

const FundraiserApp = () => {
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const init = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; 
            const contract = new ethers.Contract(contractAddress, FUNDRAISER_ABI, signer);

            setProvider(provider);
            setContract(contract);
        };

        init();
    }, []);

    return (
        <div>
            <h1>Fundraiser DApp</h1>
            <FundraiserList contract={contract} />
        </div>
    );
};

export default FundraiserApp;
