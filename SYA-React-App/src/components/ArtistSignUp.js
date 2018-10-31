import React, { Component } from 'react'

class ArtistSignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            pass: '',
            confirmpass: '',
            instagram: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.resetFields = this.resetFields.bind(this);
        this.passwordRequirements = this.passwordRequirements.bind(this);
        this.isEmail = this.isEmail.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        if(this.state.name = ''){
            alert("Name field cannot be left blank.");
        }
        else if(!(this.isEmail(this.state.email))){
            alert("Please enter a valid email address.");
            this.setState({email: ''});
        }
        else if(this.passwordRequirements(this.state.pass, this.state.confirmpass)){
            this.setState({pass: ''});
            this.setState({confirmpass: ''});
        }
        else{
            const post = {
                name: this.state.name,
                email: this.state.email,
                pass:  this.state.pass,
                confirmpass: this.state.confirmpass,
                instagram: this.state.instagram
            }
    
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                pass: JSON.stringify(post),
                name: JSON.stringify(post),
                email: JSON.stringify(post),
                instagram: JSON.stringify(post)
            }).then( resp =>resp.json())
            .then(data => console.log(data));

            this.resetFields();
        }
        
    }

    //Returns if email parameter is a valid email
    isEmail(email){
        return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );	
    }

    passwordRequirements(string, string2){
        //String must contain at least 1 lowercase, 1 uppercase, 1 numeric, and 1 special charater. minimum 8 characters
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,18})");
        if(string === ""){
            alert("Password field cannot be left blank.")
        }
        else if(string !== string2){
            alert("Passwords do not match.")
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

    //Resets all input fields
    resetFields(){
        this.setState({pass: ''});
        this.setState({confirmpass: ''});
        this.setState({name: ''});
        this.setState({email: ''});
        this.setState({instagram: ''});
    }

  render() {
    return (
      <div>
        <h1>Artist Sign Up</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Name:</label><br/>
                <input placeHolder = "*Name" type="text" name="name" onChange={this.onChange} value={this.state.name}/>
            </div>
            <div>
                <label>Email:</label><br/>
                <input placeHolder = "*Email" type="text" name="email" onChange={this.onChange} value={this.state.email}/>
            </div>
            <div>
                <label>Password:</label><br/>
                <input placeHolder = "*Password" type="password" name="pass" onChange={this.onChange} value={this.state.pass}/>
            </div>
            <div>
                <label>Confirm Password:</label><br/>
                <input placeHolder = "*Confirm Password" type="password" name="confirmpass" onChange={this.onChange} value={this.state.confirmpass}/>
            </div>
            <div>
                <label>Instagram:</label><br/>
                <input placeHolder = "*Instagram (Don't have an Instagram, enter N/A" type="text" name="instagram" onChange={this.onChange} value={this.state.instagram}/>
            </div>
            <br/>
            <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default ArtistSignUp;