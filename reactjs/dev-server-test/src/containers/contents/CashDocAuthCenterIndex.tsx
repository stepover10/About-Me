import * as React from 'react';
import Header from 'containers/header/Header';
import Footer from 'containers/footer/Footer';
import { CashDocAuthCenter } from 'containers/contents/cashdoc';

export default class CashDocAuthCenterIndex extends React.Component<any> {
  render() {
    return (
      <>
        <Header/>
          <CashDocAuthCenter/>
        <Footer/>
      </>
    )
  }
}
