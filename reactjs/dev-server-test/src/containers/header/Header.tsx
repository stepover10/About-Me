import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ContextConsumer } from 'contexts/UserContext';
import './Header.scss';

export default class Header extends React.Component<any> {

  render() {

    // const isPageAuthCenter = UserContext[1].userAgent1.includes('/auth-center')
    // console.log('#Header', this.props)


    console.log('HEADER_COMPONENT0 : ', ContextConsumer)
    // console.log('HEADER_COMPONENT1 : ', UserContext[1])
    // console.log('HEADER_COMPONENT : ', UserContext[1].userAgent)
    const isPageAuthCenter = true;

    return (
      <ContextConsumer>
        {
          ({context}) => (
            <div id="headerWrap" className={isPageAuthCenter ? 'auth-center-page' : 'headerWrap'}>
              <div className="header-body">
                <div className="logo">
                  <Link href="/">
                    <img src="/cashdoc_logo.png" className="auth-pc-logo"/>
                    {/* <img src="/img_logo_basic_01.png" className="auth-mobile-img-log dn" /> */}
                  </Link>
                </div>

                {isPageAuthCenter ? (
                  <div className="auth-t">
                    캐시닥 공인인증센터 {console.log(context)}
                  </div>
                ) : (
                  <ul className="menu-list">
                    <li>
                      <Link href="/test">로그인</Link>
                    </li>
                  </ul>
                )}

              </div>
            </div>
          )
        }
      </ContextConsumer>
    )
  }
}
