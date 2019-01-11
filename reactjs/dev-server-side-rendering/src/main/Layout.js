import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}

const Test = asyncComponent(() =>
  import('../pages/home/Home').then(module => module.default),
);

const About = asyncComponent(() =>
  import('../pages/about/About').then(module => module.default),
);

export default class Layout extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
            <Switch>
              <Route exact path="/" component={Test} />
              <Route path="/about" component={About} />
            </Switch>
        </div>
    )
  }
}