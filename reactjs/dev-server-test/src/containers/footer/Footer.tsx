import * as React from 'react';
import Link from 'next/link';
import './Footer.scss';

export default class Footer extends React.Component<any>{

    state = {
        isSite : false
    }

    /*handelCompany = (isSite:boolean) => (e):void => {
        this.setState({ isSite : !isSite })
    }*/

    render(){
        const { isSite } = this.state;
        return(
            <div id="FooterWrap">
                <div className="f-body">

                    <div className="f-inner">

                        <div className="f-top">
                            <div className="f-in-box">
                                <b>공지사항</b>
                                <b>운영정책</b>
                                {/*<span><img src="/img_logo_basic_02.png" /></span>*/}
                                <span><b>고객센터</b></span>
                            </div>
                        </div>

                        <div className="f-in-box">
                            <div className="in-a">
                                <ul>
                                    <li>
                                        <h1>회사</h1>
                                        <div className="f-bx">
                                            <span>이용약관</span>
                                            <span>개인정보처리방침</span>
                                        </div>
                                    </li>

                                    <li>
                                        <h1>문의</h1>
                                        <div className="f-bx">
                                            <span><a href="/">FAQ</a></span>
                                            <span><a href="mailto:cs@cashwalk.io">E-MAIL</a></span>
                                        </div>
                                    </li>

                                    <li>
                                        <h1>제휴문의</h1>
                                        <div className="f-bx">
                                        {
                                            [
                                              {
                                                value: 'service - cs@cashdoc.io'
                                              }, {
                                                value: 'ads - ads@cashdoc.io'
                                              }, {
                                                value: 'alliance - apartner@cashdoc.io'
                                              }
                                            ].map((v, i) => {
                                                return(
                                                  <span key={i}>
                                                      {v.value}
                                                  </span>
                                                )
                                            })
                                        }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="in-b">
                                <div className="app">
                                    <Link href="/">
                                        <img src="/img_logo_basic_02.png" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="f-last">
                    <div className="address">
                        Copyright © 2019 by CashDoc, Inc. All rights reserved.<br/> 서울시 강남구 역삼로 136 신명빌딩 7층
                    </div>
                </div>

            </div>
        )
    }
}
