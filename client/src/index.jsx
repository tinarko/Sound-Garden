import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import appReducer from './reducers/appReducer.js';
import Balance from './components/Balance.jsx';
import Budget from './components/budget.jsx';
import CCSelector from './components/CCSelector.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import EmailNotifications from './components/EmailNotifications.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount() {

    // let myRequest = new Request('/auth/facebook');
    // return fetch(myRequest)
    //   .then((response) => {
    //     console.log('here is the successful response', response);
    //     if (response) {
    //       this.setState({
    //         signedin: true,
    //       });
    //     } 
    //   })
    //   .catch((err) => {
    //     console.log('error', error);
    //   });
          // <Redirect from="/" to="/balance"/>
  }

  render () {
    return (
      <Router>
        <div>

        <h1>Thesis</h1>
        <ul>
          <li><Link to="/">Balance</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/ccSelector">CC Selector</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/emailNotifications">Email Notifications</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>

        <hr/>

        <Route path="/" component={Balance}/>
        <Route path="/budget" component={Budget}/>
        <Route path="/ccSelector" component={CCSelector}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/emailNotifications" component={EmailNotifications}/>


          <Route exact path="/" component={Login}/>
          <Route path="/balance" component={Balance}/>
          <Route path="/budget" component={Budget}/>
          <Route path="/ccSelector" component={CCSelector}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/emailNotifications" component={EmailNotifications}/>
        </div>
      </Router>
    );
  }
}

const middleware = applyMiddleware(thunkMiddleware, createLogger())
let store = createStore(appReducer, middleware);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
 document.getElementById('app'));