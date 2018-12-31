import React, { Component } from 'react';
import G2q1 from './G2q1';
import G2q2 from './G2q2';
import NewG2 from './NewG2';
import ViewG2 from './ViewG2';
import DeleteG2 from './DeleteG2';
import App from './App';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class G2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: false,
      g2q1: false,
      g2q2: false
    }
    this.goApp = this.goApp.bind(this);
    this.goG2q1 = this.goG2q1.bind(this);
    this.goG2q2 = this.goG2q2.bind(this);
  }
  goApp(event) {
    this.setState({app:true});
    console.log(this.app);
     // window.location = 'http://localhost:3000'
  }

  goG2q1(event) {
    this.setState({g2q1:true});
     // window.location = 'http://localhost:3000'
  }

  goG2q2(event) {
    this.setState({g2q2:true});
     // window.location = 'http://localhost:3000'
  }

  render() {
    if(this.state.app) return <App firstname={this.props.firstname} />
        if(this.state.g2q1) return <G2q1 firstname={this.props.firstname}/>
        if(this.state.g2q2) return <G2q2 firstname={this.props.firstname}/>
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
                  <li><a onClick={this.goG2q1}>MCQ Quiz 1</a></li>
                  <li><a onClick={this.goG2q2}>MCQ Quiz 2</a></li>
<li><Link to={'/ViewG2'}>Q&A Quiz</Link></li>
                  {this.props.firstname === 'admin' && <div>
                  <li><Link to={'/NewG2'}>Create Quiz</Link></li>
			<li><Link to={'/DeleteG2'}>Delete Quiz</Link></li>
                 </div>}
                </ul>
              </div>
            </nav>
<switch>
             <Route exact path='/NewG2' component={NewG2} />
              <Route exact path='/ViewG2' component={ViewG2} />
             <Route exact path='/DeleteG2' component={DeleteG2} />

            </switch>

	           </div>
        </Router>


<div>
<br/><br/><br/>
<h2>Rack ur Brain as here comes the Quiz on Sports :) </h2><br/><br/><br/>
<br/><br/>
<h1>ALL THE BEST !!!!!!!!!!!</h1>
</div>


      </div>
    );
  }
}

export default G2;
