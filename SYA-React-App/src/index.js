import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Demo from './demo';

//amplify imports
import Amplify from 'aws-amplify'
import config from './aws-exports'
import aws from 'aws-sdk'

ReactDOM.render(<Demo />, document.querySelector('#root'));


Amplify.configure(config)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
