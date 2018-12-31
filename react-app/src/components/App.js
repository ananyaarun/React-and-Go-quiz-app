import React, { Component } from 'react';
import G1 from './G1';
import G2 from './G2';
import Home from './Home';
import Signup from './Signup';
import LeaderBoard from './LeaderBoard';
import DeleteUser from './DeleteUser';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './NewPerson.css';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      g1: false,
      g2: false,
      rend: true,
    }
    this.goHome = this.goHome.bind(this);
    this.goG1 = this.goG1.bind(this);
    this.goG2 = this.goG2.bind(this);
    console.log(this.props.firstname)
  }
  goHome(event) {
    this.setState({home:true});
    console.log(this.home);
     // window.location = 'http://localhost:3000'
  }

  goG1(event) {
    this.setState({g1:true});
     // window.location = 'http://localhost:3000'
  }

  goG2(event) {
    this.setState({g2:true});
     // window.location = 'http://localhost:3000'
  }

  render() {
    if(this.state.home) return <Home />
        if(this.state.g1) return <G1 firstname={this.props.firstname}/>
        if(this.state.g2) return <G2 firstname={this.props.firstname}/>
    return (
   <div>
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to={'/'}>React App</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li><a onClick={this.goHome}>Logout</a></li>
                  <li><a onClick={this.goG1}>Movies</a></li>
                  <li><a onClick={this.goG2}>Sports</a></li>
                  <li><Link to={'/Signup'}>Signup</Link></li>
                  <li><Link to={'/LeaderBoard'}>Leader Board</Link></li>
                  {this.props.firstname === 'admin' && <div> 
                  <li><Link to={'/DeleteUser'}>Delete Users</Link></li></div>}

                </ul>
              </div>
            </nav>
            <Switch>
             <Route exact path='/Signup' component={Signup} />
              <Route exact path='/LeaderBoard' component={LeaderBoard} />
              <Route exact path='/DeleteUser' component={DeleteUser} />
            </Switch>

            <h1>{this.state.home}</h1>
	           </div>
        </Router>
      </div>
{this.state.rend &&
<div>
<br/><br/><br/>
<h1>WELCOME TO ARE U A MASTERMIND  </h1><br/><br/><br/>
<h2>Rules of the Quiz :- </h2><br/>
<h3>This quiz contains two main sections that is movies and sports.</h3>
<h3>Under both movies and sports thre are 2 quizes you will need to solve</h3>
<h3>Your score is the sum total of both the quizes.</h3>
<h3>You can see where you stand on the Leader Board</h3>
<h3>Use the navbar above to navigate between the pages</h3>
<br/><br/>
<h1>ALL THE BEST !!!!!!!!!!!</h1>
</div>}
      </div>
    );
  }
}

export default App;
