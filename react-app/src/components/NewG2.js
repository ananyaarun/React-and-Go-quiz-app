import React, { Component } from 'react';
import './NewPerson.css';

class NewG2 extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        id: "",
        question1: "",
        ans1: "",
        question2: "",
        ans2: "",
	question3: "",
        ans3: "",
	question4: "",
        ans4: "",
	question5: "",
        ans5: "",


      },
      submitted: false,
    }
    this.handleIChange = this.handleIChange.bind(this);
    this.handleQ1Change = this.handleQ1Change.bind(this);
    this.handleA1Change = this.handleA1Change.bind(this);
    this.handleQ2Change = this.handleQ2Change.bind(this);
    this.handleA2Change = this.handleA2Change.bind(this);
this.handleQ3Change = this.handleQ3Change.bind(this);
    this.handleA3Change = this.handleA3Change.bind(this);
this.handleQ4Change = this.handleQ4Change.bind(this);
    this.handleA4Change = this.handleA4Change.bind(this);
this.handleQ5Change = this.handleQ5Change.bind(this);
    this.handleA5Change = this.handleA5Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    fetch('http://localhost:8080/g2', {
     method: 'POST',
     body: JSON.stringify(this.state.formData),
   })
      .then(response => {
        if(response.status >= 200 && response.status < 300)
          this.setState({submitted: true});
      });
  }

   handleIChange(event) {
    this.state.formData.id = event.target.value;
  }

  handleQ1Change(event) {
    this.state.formData.question1 = event.target.value;
  }
  handleA1Change(event) {

    this.state.formData.ans1 = event.target.value;
  }
handleQ2Change(event) {
    this.state.formData.question2 = event.target.value;
  }
  handleA2Change(event) {

    this.state.formData.ans2 = event.target.value;
  }
handleQ3Change(event) {
    this.state.formData.question3 = event.target.value;
  }
  handleA3Change(event) {

    this.state.formData.ans3 = event.target.value;
  }
handleQ4Change(event) {
    this.state.formData.question4 = event.target.value;
  }
  handleA4Change(event) {

    this.state.formData.ans4 = event.target.value;
  }
handleQ5Change(event) {
    this.state.formData.question5 = event.target.value;
  }
  handleA5Change(event) {

    this.state.formData.ans5 = event.target.value;
  }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Create a New Quiz</h1>
        </header>
        <br/><br/>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Question No</label>
                <input type="text" className="form-control" value={this.state.id} onChange={this.handleIChange}/>
            </div>

            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question1} onChange={this.handleQ1Change}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.ans1} onChange={this.handleA1Change}/>
            </div>


         


            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question2} onChange={this.handleQ2Change}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.ans2} onChange={this.handleA2Change}/>
            </div>


            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question3} onChange={this.handleQ3Change}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.ans3} onChange={this.handleA3Change}/>
            </div>

            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question4} onChange={this.handleQ4Change}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.ans4} onChange={this.handleA4Change}/>
            </div>





            <div className="form-group">
                <label>Question</label>
                <input type="text" className="form-control" value={this.state.question5} onChange={this.handleQ5Change}/>
            </div>
            <div className="form-group">
                <label>Answer</label>
                <input type="text" className="form-control" value={this.state.ans5} onChange={this.handleA5Change}/>
            </div>


                <button type="submit" className="btn btn-default">Submit</button>
          </form>


        </div>

        {this.state.submitted &&
          <div>
            <h2>
              New question successfully added.
            </h2>
             This has been printed using conditional rendering.
          </div>
        }

      </div>
    );
  }
}

export default NewG2;
