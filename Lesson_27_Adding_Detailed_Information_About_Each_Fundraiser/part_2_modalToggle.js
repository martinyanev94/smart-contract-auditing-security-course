const [open, setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
<CardActions>
  <Button onClick={handleOpen} variant="contained" className={classes.button}>
    View More
  </Button>
</CardActions>
