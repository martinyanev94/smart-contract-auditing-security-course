const donate = async (amount) => {
    const tx = await contract.donate({ value: ethers.utils.parseEther(amount) });
    await tx.wait();
    await fetchBalance(contract);
};
const [amount, setAmount] = useState('');

return (
    <div>
        <h1>Fundraiser DApp</h1>
        <p>Total Funds Raised: {balance} ETH</p>
        <input type="text" placeholder="Enter amount in ETH" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => donate(amount)}>Donate</button>
    </div>
);
