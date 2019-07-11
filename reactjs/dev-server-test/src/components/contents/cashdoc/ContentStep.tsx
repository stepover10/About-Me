import * as React from 'react';
import './scss/ContentStep.scss';

export default class ContentStep extends React.Component<any> {
  render() {
    return (
        <div id="ContentStep" className="explanation">
          <div className="exp-body">
            <div className="list-desc">
              <ul>
                {[
                  {
                    note: 'STEP _ 01',
                    header: '복사를 해주세요!',
                    description: (
                      <>복사하기 버튼을 클릭 해 <br/> 인증서 복사프로그램을 실행합니다</>
                    ),
                    src: '/test_1.png'
                  }, {
                    note: 'STEP _ 02',
                    header: '인증서를 확인해주세요!',
                    description: (
                      <>인증서 복사 프로그램에 <br/> 인증서 비밀번호를 입력합니다</>
                    ),
                    src: '/test_2.png'
                  }, {
                    note: 'STEP _ 03',
                    header: '앱을 확인해주세요!',
                    description: (
                      <>캐시닥 앱에 표시된 <br/> 인증번호 12자리를 입력합니다</>
                    ),
                    src: '/test_3.png'
                  }
                ].map((v, i) => {
                  return (
                    <li key={i}>
                      <h2>{v.note}</h2>
                      <h3>{v.header}</h3>
                      <span className="desc-s">
                        {v.description}
                      </span>
                      <div>
                        <img src={v.src}/>
                      </div>
                    </li>
                  )
                })
                }
              </ul>
            </div>

          </div>
        </div>
    )
  }
}
