const [message, setMessage] = useState('');

return (
    <div>
        <h1>Fundraiser DApp</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            createFundraiser(title, goal);
        }}>
            <input
                type="text"
                placeholder="Fundraiser Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Goal in ETH"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
            />
            <button type="submit">Create Fundraiser</button>
        </form>
        {message && <p>{message}</p>}
        <FundraiserList contract={contract} />
    </div>
);
