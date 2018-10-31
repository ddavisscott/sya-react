import React, { Component } from 'react'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isEmail = this.isEmail.bind(this);
        this.passwordRequirements = this.passwordRequirements.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        if(!(this.isEmail(this.state.email))){
            alert("Please enter a valid email address.");
            this.setState({email: ''});
        }
        else if(this.passwordRequirements(this.state.pass)){
            this.setState({pass: ''});
        }
        else{
            const post = {
                user: this.state.email,
                pass:  this.state.pass
            }
    
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                pass: JSON.stringify(post)
            }).then( resp =>resp.json())
            .then(data => console.log(data));
        }

        

    }

    isEmail(email){
        return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );	
    }

    passwordRequirements(string){
        //String must contain at least 1 lowercase, 1 uppercase, 1 numeric, and 1 special charater. minimum 8 characters
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,18})");
        if(string === ""){
            alert("Password field cannot be left blank.")
        }
        else if(!strongRegex.test(string)){
            alert("Password Requirements: \n"
            + "At least 1 Lowercase character \n"
            + "At least 1 Uppercase character \n"
            + "At least 1 Numeric character (0-9) \n"
            + "At least 1 Special character (!@#$%^&*) \n"
            + "Must be longer than 8 characters. \n"
            + "Must be shorter than 18 characters. \n")
        }
        else{
            return false;
        }
        return true;
    }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Email:</label><br/>
                <input placeHolder="Email" type="text" name="user" onChange={this.onChange} value={this.state.user}/>
            </div>
            <br/>
            <div>
                <label>Password:</label><br/>
                <input placeHolder ="Password" type="text" name="pass" onChange={this.onChange} value={this.state.pass}/>
            </div>
            <br/>
            <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default SignIn;