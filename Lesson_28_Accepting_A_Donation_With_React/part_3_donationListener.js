useEffect(() => {
  const fetchData = async () => {
    const event = await contract.events.DonationReceived({
      filter: {},
      fromBlock: 'latest'
    });
  
    event.on('data', (event) => {
      // Extract data for updating state
      const totalDonations = event.returnValues.totalDonations;
      setTotalDonations(totalDonations);
    });
  };
  fetchData();
}, []);
