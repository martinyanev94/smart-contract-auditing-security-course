<form onSubmit={(e) => {
    e.preventDefault();
    createFundraiser(title, goal);
}} className="mb-4">
    <input
        type="text"
        placeholder="Fundraiser Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 rounded m-2"
    />
    <input
        type="text"
        placeholder="Goal in ETH"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        required
        className="border p-2 rounded m-2"
    />
    <button type="submit" className="bg-blue-600 text-white p-2 rounded m-2 hover:bg-blue-500">Create Fundraiser</button>
</form>
