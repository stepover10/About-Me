import * as React from 'react';
import './scss/ContentAccumulate.scss';

export default class ContentAccumulate extends React.Component<any> {

  cashStepKindsDom = (params: Array<any>):JSX.Element|any => {
    const inDom = params.map((v, i) => {
      return (
        <li
          key={i}
          className={`${v.is}`}
        >
          <span>{v.description}</span>
          <img src={v.src}/>
          {!v.is && <i>준비중</i>}
        </li>
      )
    })

    return inDom;
  }

  render() {
    return (
      <div id="ContentAccumulate" className="explanation exp-bg-line">
        <div className="exp-body">

          <div className="exp-col-one">
            <h1>
              금융 - 건강 관리만해도<br/>
              <b><em><i/>캐시가 적립</em> 됩니다!</b>
            </h1>

            <div className="cash-step-kinds">
              <div className="range-one range">
                <h2>
                  <i>01</i> 내 자산을 연결하면 <em>500캐시<i/></em> 적립 (은행, 카드, 대출 각 최초 연결 시)
                  <span className="r-sub">
                        문구가 필요합니다
                      </span>
                </h2>
                <ul className="range-icon-desc">
                  {this.cashStepKindsDom([
                    {description: '은행', src: '/ic_account_blue.png', is: true},
                    {description: '신용카드', src: '/ic_card_blue.png', is: true},
                    {description: '대출', src: '/ic_loan_blue.png', is: true},
                    {description: '투자', src: '/ic_cash_blue.png', is: true},
                  ])
                  }
                  {this.cashStepKindsDom([
                    {description: '보험', src: '/ic_none.png', is: false},
                    {description: '자동차', src: '/ic_none.png', is: false},
                    {description: '부동산', src: '/ic_none.png', is: false},
                    {description: '신용점수', src: '/ic_none.png', is: false},
                    {description: '포인트', src: '/ic_none.png', is: false},
                  ])
                  }
                </ul>
              </div>

              <div className="range range-p">
                <h2>
                  <i>02</i>
                  <span>친구 초대 하면 <em>200캐시<i/></em> 적립</span>
                  <span className="r-sub">
                        문구가 필요합니다
                      </span>
                </h2>
              </div>
              <div className="range range-p">
                <h2>
                  <i>03</i>
                  <span>신규가입 시 <em>100캐시<i/></em> 적립</span>
                  <span className="r-sub">
                        문구가 필요합니다
                      </span>
                </h2>
              </div>
              <div className="range range-p">
                <h2>
                  <i>04</i>
                  <span>자산 변동 알림 PUSH 확인 <em>10캐시<i/></em> 적립</span>
                  <span className="r-sub">
                        문구가 필요합니다
                      </span>
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>

    )
  }
}
