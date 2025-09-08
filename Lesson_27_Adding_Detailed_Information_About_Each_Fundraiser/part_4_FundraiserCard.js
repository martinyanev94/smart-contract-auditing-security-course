return (
  <div>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.imageURL}
        title={props.fundName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.fundName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Total Donations: {props.totalDonations}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen} variant="contained" className={classes.button}>
          View More
        </Button>
      </CardActions>
    </Card>
    
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
  </div>
);
