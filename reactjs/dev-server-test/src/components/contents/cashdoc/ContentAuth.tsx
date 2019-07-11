import * as React from 'react';
import { _Modules_ } from 'modules';
import { Button } from 'common/Button';
import './scss/ContentAuth.scss'

export default class ContentAuth extends React.Component<any> {

  state = {
    authCopyUrl: 'https://cert.scraping.co.kr/cashwalk',
    isRender: false
  }

  authWindowOpen = () => {
    const openWidth = 1024;
    const openHeight = 768;

    const browerserTop = (screen.height - openHeight) / 4;
    const browerserLeft = window.screenX + ((window.innerWidth - openWidth) / 2);

    window.open(
      this.state.authCopyUrl,
      '_blank',
      `width=${openWidth}px, 
      height=${openHeight}px, 
      menubars=no, 
      scrollbars=auto,
      left=${browerserLeft}
      top=${browerserTop}
      `
    );
  }

  componentDidMount(){
    this.setState({
      isRender : true
    })
  }

  render() {

    if ( !this.state.isRender ) return null;

    return (
      <div id="ContentAuth" className="explanation">

        <div className="exp-body">
          <div className="exp-header">

            <ul id="lineDesignAuthScope">
              <li><b/><span/></li>
              <li><span/><b/></li>
              <li><b/><span/></li>
            </ul>

            <h1 className="auth-index-header">
              안녕하세요<br/>
              <b>금융 - 건강 주치의 <em><i/>캐시닥</em>!!</b>
              <ul className="t-icon-li">
                {[
                  "#자산관리",
                  "#금융관리",
                  "#건강관리",
                ].map((v, i) => {
                    return <li key={i}>{v}</li>;
                  })
                }
              </ul>
            </h1>
          </div>

          <div className="exp-col">
            <h1>
              <div className="mediaQuery-img-view">
                <img src="/img_certification_big.png"/>
              </div>

              <span className="sub">
                  은행, 카드, 대충 건강 등<br className="_m-br_" />흩어져 있는
                  금융 건강 정보를<br/>
                  <b>이제 캐시닥에서 모두 관리하세요</b>
                </span>
            </h1>
            <div className="exp-sub">
                { !_Modules_.userAgent()
                  ? (
                    <div className="auth-button">
                      <Button type="yellow" id="authorizationCertificateCopy" onClick={this.authWindowOpen}>
                        공인인증서 복사하기
                      </Button>
                      <i className="ani-line-desx" />
                    </div>
                  ) : (
                    <div id="authorizationCertificateCopy_false">
                      <span>
                        공인인증서 복사는 <i>윈도우 PC</i>에서만 가능합니다
                      </span>
                    </div>
                  )
                }
            </div>
          </div>

          <div className="exp-col">
            <div className="img-view">
              <img
                src="/img_certification_big.png"
                width={500}
                style={{marginRight: 60}}
              />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
