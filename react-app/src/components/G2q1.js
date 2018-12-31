import React, { Component } from 'react';
import DeletePerson3 from './DeletePerson3';
import ViewPeople3 from './ViewPeople3';
import NewPerson3 from './NewPerson3';
import G2 from './G2';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class G2q1 extends Component {
  constructor(props) {
	super(props);
	this.state = {
		admin: true,
                g2: false,
                
	}
this.goG2 = this.goG2.bind(this);
  }

goG2(event) {
    this.setState({g2:true});
     // window.location = 'http://localhost:3000'
  }

  render() {
   if(this.state.g2) return <G2 firstname={this.props.firstname}/>
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
                  <li><a onClick={this.goG2}>Back</a></li>

                  <li><Link to={'/ViewPeople3'}>Start Quiz</Link></li>
		{this.props.firstname === 'admin' && <div>
                  <li><Link to={'/NewPerson3'}>Create Question</Link></li>
                  <li><Link to={'/DeletePerson3'}>Delete Question</Link></li>
                  </div>}
                </ul>
              </div>
            </nav>
            <Switch>
                 <Route exact path='/ViewPeople3' component={ViewPeople3} />
		{this.props.firstname === 'admin' && <div>
                 <Route exact path='/NewPerson3' component={NewPerson3} />
                 <Route exact path='/DeletePerson3' component={DeletePerson3} />
                 </div>}
            </Switch>
          </div>
        </Router>

<div>
<br/><br/><br/><br/><br/><br/>
<h1>FIRST QUIZ ON SPORTS  </h1><br/>
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

export default G2q1 ;
