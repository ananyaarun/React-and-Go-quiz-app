import React, { Component } from 'react';
import G1q1 from './G1q1';
import G1q2 from './G1q2';
import NewG1 from './NewG1'; 
import ViewG1 from './ViewG1';
import DeleteG1 from './DeleteG1';
import App from './App';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class G1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: false,
      g1q1: false,
      g1q2: false,
      
    }
    this.goApp = this.goApp.bind(this);
    this.goG1q1 = this.goG1q1.bind(this);
    this.goG1q2 = this.goG1q2.bind(this);
  }
  goApp(event) {
    this.setState({app:true});
    console.log(this.app);
     // window.location = 'http://localhost:3000'
  }

  goG1q1(event) {
    this.setState({g1q1:true});
     // window.location = 'http://localhost:3000'
  }

  goG1q2(event) {
    this.setState({g1q2:true});
     // window.location = 'http://localhost:3000'
  }

  render() {
    if(this.state.app) return <App firstname={this.props.firstname} />
        if(this.state.g1q1) return <G1q1 firstname={this.props.firstname}/>
        if(this.state.g1q2) return <G1q2 firstname={this.props.firstname}/>
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>React App</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><a onClick={this.goApp}>Back</a></li>
                  <li><a onClick={this.goG1q1}>MCQ Quiz 1</a></li>
                  <li><a onClick={this.goG1q2}>MCQ Quiz 2</a></li>
                   <li><Link to={'/ViewG1'}>Q&A Quiz</Link></li>
                  {this.props.firstname === 'admin' && <div>
                  <li><Link to={'/NewG1'}>Create quiz</Link></li>
			 <li><Link to={'/DeleteG1'}>Delete quiz</Link></li>

                  </div>}
                </ul>
              </div>
            </nav>
            <switch>
             <Route exact path='/NewG1' component={NewG1} />
              <Route exact path='/ViewG1' component={ViewG1} />
             <Route exact path='/DeleteG1' component={DeleteG1} />

            </switch>
	           </div>
        </Router>


<div>
<br/><br/><br/>
<h2>Rack ur Brain as here comes the Quiz on Movies :) </h2><br/><br/><br/>
<br/><br/>
<h1>ALL THE BEST !!!!!!!!!!!</h1>
</div>


      </div>
    );
  }
}

export default G1;
