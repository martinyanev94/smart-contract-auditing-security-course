<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Donate to {props.fundName}</DialogTitle>
  <DialogContent>
    <DialogContentText>
      <img src={props.imageURL} width='200' height='200' alt="Fundraiser" />
      <p>{props.description}</p>
      <p>Total Donations: {props.totalDonations}</p>
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
  </DialogActions>
</Dialog>
