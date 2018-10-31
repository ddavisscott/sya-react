import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Orange from "@material-ui/core/colors/orange";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function AppBar(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Freebie Credits: 0</Button>
      <Button color="orange" className={classes.button}>
        Home
      </Button>
      <Button color="secondary" className={classes.button}>
        Blogs/Magazines
      </Button>
      <Button className={classes.button}>Support</Button>
      <Button href="#text-buttons" className={classes.button}>
        About Us
      </Button>
      <label htmlFor="flat-button-file">
        <Button component="span" className={classes.button}>
          Sign In
        </Button>
      </label>
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);