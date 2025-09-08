const createFundraiser = async (title, goal) => {
    try {
        const tx = await contract.createFundraiser(title, ethers.utils.parseEther(goal));
        await tx.wait();
        // After successfully creating a fundraiser, fetch the updated list
        fetchFundraisers();
    } catch (error) {
        console.error("Error creating fundraiser:", error);
        setMessage("Failed to create fundraiser!");
    }
};
