const [message, setMessage] = useState('');

const donate = async (amount) => {
    setMessage("");
    try {
        const tx = await contract.donate({ value: ethers.utils.parseEther(amount) });
        await tx.wait();
        setMessage(`Successfully donated ${amount} ETH!`);
    } catch (error) {
        setMessage("Donation failed! Please try again.");
    }
};

return (
    <div>
        <h1>Fundraiser DApp</h1>
        <p>Total Funds Raised: {balance} ETH</p>
        <input type="text" placeholder="Enter amount in ETH" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => donate(amount)}>Donate</button>
        {message && <p>{message}</p>}
    </div>
);
