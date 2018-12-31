import React, { Component } from 'react';
import DeletePerson1 from './DeletePerson1';
import ViewPeople1 from './ViewPeople1';
import NewPerson1 from './NewPerson1';
import G1 from './G1';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class G1q1 extends Component {
  constructor(props) {
	super(props);
	this.state = {
		admin: true,
                g1: false,
                
	}
this.goG1 = this.goG1.bind(this);
  }

goG1(event) {
    this.setState({g1:true});
     // window.location = 'http://localhost:3000'
  }

  render() {
   if(this.state.g1) return <G1 firstname={this.props.firstname}/>
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
                  <li><a onClick={this.goG1}>Back</a></li>

                  <li><Link to={'/ViewPeople1'}>Start Quiz</Link></li>
		{this.props.firstname === 'admin' && <div>
                  <li><Link to={'/NewPerson1'}>Create Question</Link></li>
                  <li><Link to={'/DeletePerson1'}>Delete Question</Link></li>
                  </div>}
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/ViewPeople1' component={ViewPeople1} />
		{this.props.firstname === 'admin' && <div>
                 <Route exact path='/NewPerson1' component={NewPerson1} />
                 <Route exact path='/DeletePerson1' component={DeletePerson1} />
                 </div>}
            </Switch>
          </div>
        </Router>

<div>
<br/><br/><br/><br/><br/><br/>
<h1>FIRST QUIZ ON MOVIES  </h1><br/>
<h2>This is MCQ type choose the most suitable option </h2><br/>
<h3>Click on submit button after each question</h3>
<h3>View your score below :)</h3>
<h3>Check your standing on the leader board</h3>
<h3>Use the navbar above to navigate between the pages</h3>
<br/>
<h1>ALL THE BEST !!!!!!!!!!!</h1>
</div>


      </div>
    );
  }
}

export default G1q1 ;
