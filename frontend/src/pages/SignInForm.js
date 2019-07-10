import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roll: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user ={
            "username":this.state.roll,
            "password":this.state.password
        }
        axios
            .post('http://localhost:8000/api/v1/rest_auth/login/',user)
            .then(res => alert('success'))
            .catch(err=>console.log(err));
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Roll Number</label>
                <input type="text" id="email" className="FormField__Input" placeholder="Enter your Roll number" name="roll" value={this.state.roll} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
