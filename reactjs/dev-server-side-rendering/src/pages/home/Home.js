import React, {Component} from 'react';

export default class Home extends Component {
  state = {
    name : 'dd'
  }

  componentDidMount() {
    console.log(11)
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}