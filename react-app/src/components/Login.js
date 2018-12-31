import React, { Component } from 'react';
import './NewPerson.css';
import App from './App';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        firstname: "",
        password: "",
       

      },
      submitted: false,
    }
    this.handleQChange = this.handleQChange.bind(this);
    this.handleO1Change = this.handleO1Change.bind(this);
  //  this.handleO2Change = this.handleO2Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
 //   event.preventDefault();
  //  fetch('http://localhost:8080/user', {
  //   method: 'POST',
  //   body: JSON.stringify(this.state.formData),
  // })
    //  .then(response => {
      //  if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
     // });
  }

  handleQChange(event) {
    this.state.formData.firstname = event.target.value;
  }
  handleO1Change(event) {
    this.state.formData.password = event.target.value;
  }
 // handleO2Change(event) {
   // this.state.formData.o2 = event.target.value;
 // }
 


  render() {

    return (
      <div className="App">
	{!this.state.submitted && <div>
        <header className="App-header">
          
          <h1 className="App-title">Login</h1>
        </header>
        <br/><br/>
        <h2 className="App-title">Welcome to Mastermind Quiz !! Please Login to Proceed :)</h2>
     <br/><br/>   <div className="formContainer">
          <form onSubmit = {this.handleSubmit}>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.firstname} onChange={this.handleQChange}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" value={this.state.password} onChange={this.handleO1Change}/>
            </div>
                <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div></div>
}

        {this.state.submitted && <App firstname={this.state.formData.firstname}/>
        }

      </div>
    );
  }
}

export default Login;
