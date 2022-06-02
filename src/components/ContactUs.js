import React, { Component } from "react";

export class ContactUs extends Component {
  
    state = {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      firstNameErr : '',
      lastNameErr : '',
      emailErr : '',
      passwordErr : ''
    }

    handleChange = (e)=>{
      // console.log(e);
      const { name, value } = e.target;
      this.setState({ [name] : value })
    }

    validateTheForm = () =>{
      let firstNameErr = "";
      let lastNameErr = "";
      let emailErr = "";
      let passwordErr = "";

      if(this.state.firstName.length<4){
        firstNameErr = "firstName should be minimum of 4 characters"
      }

      if(this.state.lastName.length<4){
        lastNameErr = "lastName should be minimum of 4 characters"
      }

      if(!this.state.email.includes('@')){
        emailErr = "Enter a valid Email"
      }

      if(this.state.password.length<4){
        passwordErr = "password should be minimum of 4 characters"
      }

      if(firstNameErr || lastNameErr || emailErr || passwordErr){
          this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
      }else{
        this.setState({firstNameErr,lastNameErr,emailErr,passwordErr})
      }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.validateTheForm();
    }

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="mb-2 form-control"
                  placeholder="Enter your First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{this.state.firstNameErr}</span>
                <input
                  type="text"
                  className="mb-2 form-control"
                  placeholder="Enter your Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{this.state.lastNameErr}</span>
                <input
                  type="text"
                  className="mb-2 form-control"
                  placeholder="Enter your Email Name"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{this.state.emailErr}</span>
                <input
                  type="text"
                  className="mb-2 form-control"
                  placeholder="Enter your Password Name"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{this.state.passwordErr}</span>
                <div>
                <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
