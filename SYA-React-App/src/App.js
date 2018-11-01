import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider } from 'react-redux';

import Posts from './components/Posts'; 
import PostForm from './components/PostForm';

import store from './store';
import SignIn from './components/SignIn';
import AristSignUp from './components/ArtistSignUp';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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

export default App;