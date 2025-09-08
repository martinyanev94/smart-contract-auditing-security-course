import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { FUNDRAISER_ABI } from './contracts/Fundraiser';

const FundraiserList = ({ contract }) => {
    const [fundraisers, setFundraisers] = useState([]);

    useEffect(() => {
        const fetchFundraisers = async () => {
            const data = await contract.getFundraisers();
            setFundraisers(data);
        };
        
        fetchFundraisers();
    }, [contract]);

    return (
        <div>
            <h2>Active Fundraisers</h2>
            <ul>
                {fundraisers.map((fundraiser, index) => (
                    <li key={index}>
                        <h3>{fundraiser.title}</h3>
                        <p>Created by: {fundraiser.creator}</p>
                        <p>Total Raised: {ethers.utils.formatEther(fundraiser.totalRaised)} ETH</p>
                        <p>Goal: {ethers.utils.formatEther(fundraiser.goal)} ETH</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
