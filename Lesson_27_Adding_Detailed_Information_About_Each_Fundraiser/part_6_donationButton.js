<Button
  onClick={submitFunds}
  variant="contained"
  color="primary">
  Donate
</Button>
const submitFunds = async () => {
  const donationInWei = web3.utils.toWei(donationAmount, 'ether');
  await contract.methods.donate().send({
    from: accounts[0],
    value: donationInWei,
  });
  alert(`Thank you for your donation of ${donationAmount} ETH!`);
  setOpen(false);  // Close the dialog after donation
};
