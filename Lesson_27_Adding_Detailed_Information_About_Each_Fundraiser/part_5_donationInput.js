const [donationAmount, setDonationAmount] = useState('');

<FormControl>
  <InputLabel htmlFor="donation-amount">Donation Amount</InputLabel>
  <Input
    id="donation-amount"
    value={donationAmount}
    onChange={(e) => setDonationAmount(e.target.value)}
    placeholder="0.00"
  />
</FormControl>
