const submitFunds = async () => {
  const donationInWei = web3.utils.toWei(donationAmount, 'ether');
  try {
    await contract.methods.donate().send({
      from: accounts[0],
      value: donationInWei,
    });
    alert(`Thank you for your donation of ${donationAmount} ETH!`);
    setOpen(false); // Close the dialog after donation
    setDonationAmount(''); // Reset the input field
  } catch (error) {
    console.error("An error occurred while processing the donation:", error);
    alert("There was an issue with your donation. Please try again.");
  }
};
