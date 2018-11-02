import React, { Component } from 'react';
import axios from 'axios';

export default class UploadImage extends Component {
    constructor() {
        super();
        this.state = {
            file:null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        if ( event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.setState({file:event.target.files[0]})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.file == null) {
            alert("File Not Chosen")
        }
        else {        
        const form = new FormData();
        form.append('image',this.state.file);
        form.append("userId",this.props.id);
        axios({
            method: 'post',
            url: '/test',
            data: form,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
    }

    render() {
        return(
            <div>
             <img src ={this.state.image} alt ="No Art Selected" height = "200" />
            <form onSubmit = {this.handleSubmit}>
                <input label = 'upload image' 
                type = 'file' onChange = {this.handleChange} 
                accept = "image/*"/>
                <button type = 'submit' >
                    Upload
                </button>
            </form>
            </div>
        )
    }

}