import React from 'react';
import App, { Container } from 'next/app';

export default Component => {
  return class WithContainer extends React.Component {
    
    static getInitialProps = Component.getInitialProps
    // static displayName = `WithContainer(${getDisplayName(App)})`;
    
    render() {

      console.log( this.props )

      return (
        <Container>
          <Component {...this.props} />
        </Container>
      );
    }
  };
}