import React, { Component } from 'react';
import './NewPerson.css';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        firstname: "",
        email: "",
        password: "",
       

      },
      submitted: false,
    }
    this.handleQChange = this.handleQChange.bind(this);
    this.handleO1Change = this.handleO1Change.bind(this);
    this.handleO2Change = this.handleO2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/user', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }


  handleQChange(event) {
    this.state.formData.firstname = event.target.value;
  }
  handleO1Change(event) {
    this.state.formData.email = event.target.value;
  }
  handleO2Change(event) {
    this.state.formData.password = event.target.value;
  }
 


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create an Account</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.firstname} onChange={this.handleQChange}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" value={this.state.email} onChange={this.handleO1Change}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" value={this.state.password} onChange={this.handleO2Change}/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>

        {this.state.submitted &&
          <div>
            <h2>
              Signup Done
            </h2>
             This has been printed using conditional rendering.
          </div>
        }

      </div>
    );
  }
}

export default Signup;
