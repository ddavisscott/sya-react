import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar.js';
import Demo from './demo.js';

class App {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar />
        <Demo />
      </React.Fragment>
    );
  }
}

export default App;