import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            Email: '',
            Password1: '',
            Password2:'',
            Username: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;

        this.setState({
          [name]: target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            "username":this.state.Username,
            "password1":this.state.Password1,
            "password2":this.state.Password1
        };
        console.log(user);
        axios
            .post('http://localhost:8000/api/v1/rest_auth/registration/',user)
            .then(res => alert('posted'))
            .catch(err=> console.log(err));
    }f
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Roll Number</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your roll number" name="Username" value={this.state.Username} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="text" id="password2" className="FormField__Input" placeholder="Enter your password" name="Password1" value={this.state.Password1} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="text" id="password2" className="FormField__Input" placeholder="Confirm password" name="Password2" value={this.state.Password2} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="Email" value={this.state.Email} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
