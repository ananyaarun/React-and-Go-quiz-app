import React, { Component } from 'react';
import './DeletePerson.css';

class DeleteG2 extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      selecteduser : null
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleOptionChange(event) {
      this.setState({
        selecteduser: event.target.value
      });
    }



   handleSubmit (event) {
      event.preventDefault();
      fetch( 'http://localhost:8080/g2/'+this.state.selecteduser , {
       method: 'DELETE',
     })
        .then(response => {
          if(response.status >= 200 && response.status < 300)
            this.setState({selecteduser:null});
            this.componentDidMount();
        });
    }


  // Lifecycle hook, runs after component has mounted onto the DOM structure
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/g2/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }
    


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Delete a Quiz</h1>
        </header>
<form onSubmit={this.handleSubmit}>
       <table className="table-hover">
          <thead>
            <tr>
              <th>Quiz number</th>
             
            </tr>
          </thead>
          <tbody>{this.state.data.map(function(item, key) {
               return (
                  <tr key = {key}>
             <td>{item.id}</td>
                      
             <input type="radio" value={item.id} checked={this.state.selecteduser == item.id} onChange={this.handleOptionChange}/>
                  </tr>
                )
             },this)}
          </tbody>
       </table>
<input type="submit" value="Delete"/>
</form>
      </div>
    );
  }
}

export default DeleteG2;
