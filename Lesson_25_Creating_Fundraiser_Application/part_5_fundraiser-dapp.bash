npm install -D tailwindcss
npx tailwindcss init
@tailwind base;
@tailwind components;
@tailwind utilities;
return (
    <div className="p-8 bg-gray-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Fundraiser DApp</h1>
        <p className="text-lg">Total Funds Raised: {balance} ETH</p>
        <input
            type="text"
            placeholder="Enter amount in ETH"
            className="border rounded p-2 mb-4"
            onChange={(e) => setAmount(e.target.value)}
        />
        <button
            onClick={() => donate(amount)}
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
        >
            Donate
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
);
