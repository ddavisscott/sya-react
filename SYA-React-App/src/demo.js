import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';
import { createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  login: {
    marginTop: theme.spacing.unit * 3,
    alignItems: "left"
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const newTheme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function SignIn(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography 
          color = "secondary" 
          component="h1" 
          variant="h5">
            Get Your Art Seen Today - guaranteed a response.
          </Typography>
          <Button 
           type = "login"
           color="red" 
           variant="contained" 
           className={classes.login}>
            Log In With Google
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            className={classes.button}>
             Log In With Facebook
          </Button>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Mail</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            
            <Button className={classes.button}>
            Business Sign Up</Button>
            <Button className={classes.button}>Artist Sign Up</Button>

          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles,newTheme)(SignIn);
