import React, { Component } from 'react';
import './ViewPeople.css';

class ViewPeople2 extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selected : null,
      score : 0,
      submitted : true,
      ans : null
    }
     this.handleOptionChange = this.handleOptionChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);

  }

 handleOptionChange(event) {
      this.setState({
        selected: event.target.value
     
      });
    }


handleSubmit(event,a) {
   event.preventDefault();

      if(a === this.state.selected)
        this.state.score = this.state.score + 1
      
          this.state.submitted = true
       console.log(this.state.score)
       console.log(this.state.selected)
       console.log(a)
    }




  // Lifecycle hook, runs after component has mounted onto the DOM structure
  componentDidMount() {
    const request = new Request('http://127.0.0.1:8080/question2/');
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
           //this.state.ans = item.ans
               return (
                  <tr><td>
                      <form onSubmit={(e) => {this.handleSubmit(e,item.ans)}}>
                      {item.id}{' '}{item.question}<br/><br/>
<input type="radio" value={item.o1} checked={this.state.selected == item.o1} onChange={this.handleOptionChange}/>
{item.o1}<br/>

<input type="radio" value={item.o2} checked={this.state.selected == item.o2} onChange={this.handleOptionChange}/>

{item.o2}<br/>
<input type="radio" value={item.o3} checked={this.state.selected == item.o3} onChange={this.handleOptionChange}/>

{item.o3}<br/>
<input type="radio" value={item.o4} checked={this.state.selected == item.o4} onChange={this.handleOptionChange}/>

{item.o4}
<br/><input type="submit" value="Submit"/>            
</form>
</td>






      </tr>)


             })}
          </tbody>
       </table>
{this.state.submitted &&
          <div>
            <h2>
           Congrats ur score so far is {this.state.score}
           </h2>

         </div>
        }
      </div>
    );
  }
}

export default ViewPeople2;
