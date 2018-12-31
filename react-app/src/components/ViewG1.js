import React, { Component } from 'react';
import './ViewPeople.css';

class ViewG1 extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selected : null,
      score : 4,
      submitted : false,
    }
     this.handleOptionChange = this.handleOptionChange.bind(this);

  }

 handleOptionChange(event) {
      this.setState({
        selected: event.target.value
     
      });
    }





  // Lifecycle hook, runs after component has mounted onto the DOM structure
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/g1/');
    fetch(request)
      .then(response => response.json())
        .then(data => this.setState({data: data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz 1</h1>
        </header>

        <table className="table-hover">
          <thead>
            <tr>
              <th>Questions</th>
              
            </tr>
          </thead>
          <tbody>{this.state.data.map((item, key)=> {
               return (
                  <tr>
                      
                      <td>{item.question1}<br/><input type= "text"/><br/><br/>
{item.question2}<br/><input type= "text"/><br/><br/>{item.question3}<br/><input type= "text"/><br/><br/>{item.question4}<br/><input type= "text"/><br/><br/>{item.question5}<br/><input type= "text"/><br/><br/>


</td>

                  </tr>
)


             })}
          </tbody>
       </table>


        }



      </div>
    );
  }
}

export default ViewG1;
