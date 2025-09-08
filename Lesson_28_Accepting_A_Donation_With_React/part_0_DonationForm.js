import TextField from '@material-ui/core/TextField';
const [donationAmount, setDonationAmount] = useState('');

<TextField
  label="Donation Amount"
  variant="outlined"
  value={donationAmount}
  onChange={(e) => setDonationAmount(e.target.value)}
  type="number"
/>
