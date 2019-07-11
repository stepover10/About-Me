import * as React from 'react';
import {
  ContentAuth, ContentStep,
  ContentAppDownload, ContentAccumulate, ContentShoppingDescription
} from 'components/contents/cashdoc';
import './CashDocAuthCenter.scss'

export default class CashDocAuthCenter extends React.Component<any> {

  render() {
    return (
      <div id="CashDocAuthContent">
        <div className="commonLayout">

          <ContentAuth />

          <div className="design-line-tree"><i/><span /><i/></div>
          <ContentStep />

          <ContentAccumulate />
          <ContentShoppingDescription />

          <div className="design-line-tree"><i/><span /><i/></div>
          <ContentAppDownload />

        </div>
      </div>
    )
  }
}
