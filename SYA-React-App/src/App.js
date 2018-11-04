import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar.js';
import Demo from './demo.js';

import {Provider } from 'react-redux';

import Posts from './components/Posts'; 
import PostForm from './components/PostForm';

import store from './store';
import SignIn from './components/SignIn';
import AristSignUp from './components/ArtistSignUp';

//the Amplify library needed to integrate Amazon Cognito for user 
// signup/signin

import { withAuthenticator } from 'aws-amplify-react'
//import ArtistSignUp from './components/ArtistSignUp';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <React.Fragment>
      <CssBaseline />
      <AppBar />
      <Demo />
      </React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
        <AristSignUp/>
        <SignIn/>
        <PostForm/>
        <hr/>
        <Posts/>
      </div>
      </Provider>
    );
  }
}

//withAuthenticator(App) means the application will not run until user is signed in.
export default withAuthenticator(App);