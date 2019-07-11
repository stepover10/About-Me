import * as React from 'react';
import { _RandomColor_ } from 'modules';
import './scss/ContentAppDownload.scss';

export default class ContentAppDownload extends React.Component<any> {

  state = {
    backGroundLineDomData: []
  }

  componentDidMount(): void {
    this.randomBackGroundLines();

    const backGroundLineDomData = [];
    for ( let i=0; i<25; i++ ) {
      backGroundLineDomData.push(
        <li key={i} style={{
          'width': Math.round(Math.random()*50),
          'height': Math.round(Math.random()*3)
        }} />
      );
    }

    this.setState({ backGroundLineDomData })
  }

  randomBackGroundLines = ():void => {

    const RandomPosition = (is:string):string => {
      const posY = ['top','bottom']
          , posX = ['left','right'];

      const isArr = is === 'Y'
        ? posY.concat(posY, posY)
        : posX.concat(posX, posX)

      return isArr[ Math.round(Math.random()*6) ];
    }

    const lineDom = document.getElementById('backGroundLine');
    const menus = Array.from(lineDom.querySelectorAll("li"));

    menus.forEach((v) => {
      const pxValue = Math.floor( (Math.random() * 100) + 1 );

      v.style.backgroundColor = _RandomColor_(150);
      v.style[ RandomPosition('Y') ] = `${pxValue}%`;
      v.style[ RandomPosition('X') ] = `${pxValue}%`;
    })

  }

  render() {

    return (
      <div id="ContentAppDownload" className="explanation">
        <ul id="backGroundLine">
          {this.state.backGroundLineDomData}
        </ul>
        <div className="exp-body">

          <div className="exp-col">
            <h1>
              캐시닥이 궁금하세요!?<br/>
              <b>지금 바로 <em><i/>다운로드</em> 하세요!</b>
              <span className="sub">
                해당되는 OS를 선택해주세요
              </span>
            </h1>
          </div>
          <div className="exp-col">
            <div className="app-download-style">
              <ul>
                <li className="btn-any">
                  <a href="#none">
                    <img src="/google_play_icon.png"/>
                    Google Play
                  </a>
                </li>
                <li className="btn-any no-app-desc">
                  <a href="#none">
                    <img src="/apple_logo.png"/>
                    App Store
                    <i>iOS 8월 출시 예정!</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
