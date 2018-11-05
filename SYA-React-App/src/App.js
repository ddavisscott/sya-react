import React, { Component } from 'react';
import './App.css';
import Title from './title'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { Analytics } from 'aws-amplify'
import { Storage } from 'aws-amplify';
import UploadImage from './UploadImage';

Auth.currentAuthenticatedUser()
    .then(user => console.log(user))
    .catch(err => console.log(err));


class App extends Component {
      signOut = () => {
        Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err));
      }
    
      render() {
        Storage.list('',{
            bucket:'myapp-20181030214040-deployment'})
        .then(result => console.log(result))
        .catch(err => console.log(err));
          return (
            <div>
              <button onClick = {this.signOut}>Sign Out</button>
              <UploadImage/>
            </div>
          )
      }
    }
    




export default withAuthenticator(App);
