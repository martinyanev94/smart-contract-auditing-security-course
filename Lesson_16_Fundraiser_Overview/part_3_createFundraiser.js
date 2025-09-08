async function createFundraiser() {
    const fundraiserData = {
        name: document.getElementById('name').value,
        url: document.getElementById('url').value,
        imageURL: document.getElementById('imageURL').value,
        description: document.getElementById('description').value,
        beneficiary: document.getElementById('beneficiary').value,
        custodian: document.getElementById('custodian').value,
    };
  
    await myContract.methods.createFundraiser(
        fundraiserData.name,
        fundraiserData.url,
        fundraiserData.imageURL,
        fundraiserData.description,
        fundraiserData.beneficiary,
        fundraiserData.custodian
    ).send({ from: accounts[0] });
}
