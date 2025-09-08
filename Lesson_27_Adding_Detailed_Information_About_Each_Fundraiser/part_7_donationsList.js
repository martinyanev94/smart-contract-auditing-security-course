const [userDonations, setUserDonations] = useState([]);

const renderDonationsList = () => {
  return (
    <div>
      <h3>Your Donations:</h3>
      {userDonations.map((donation, index) => (
        <p key={index}>You donated: {donation} ETH</p>
      ))}
    </div>
  );
};
