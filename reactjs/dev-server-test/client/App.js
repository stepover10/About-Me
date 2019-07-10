import React, { Component } from 'react';
import fetch from 'cross-fetch';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { 
      items: [] 
    };
    
  }

  componentDidMount() {    
  }

  fetchList() {   
  }

  render() {

    console.log( this.props )

    return (
      <ul>
        <li>ddd</li>
        {this.state.items}
      </ul>
    );
  }

}

export default App;

