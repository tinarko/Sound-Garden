import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
  }

  // handleClick () {
  //   console.log('clicked');
  //   $.ajax({
  //     url: '/login',
  //     method: 'POST',
  //     success: (data) => {
  //       console.log(data);
  //     },
  //     fail: (err) => {
  //       console.log(err);
  //       // throw err;
  //     }
  //   });
  // }

  render () {
    return (<div>
      <h3>FinancialAdvisorly OR FinanciaLYours...?</h3>
      <a href="/auth/facebook">Login with Facebook</a>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));