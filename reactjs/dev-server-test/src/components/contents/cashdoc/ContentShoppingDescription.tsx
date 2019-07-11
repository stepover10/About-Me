import * as React from 'react';
import './scss/ContentShoppingDescription.scss'

export default class ContentShoppingDescription extends React.Component<any> {

  render(){
    return(
      <div id="ContentShoppingDescription" className="explanation">
        <div className="cash-icon">
          <b /><img src="/img_assets_add.png" />
        </div>

        <div className="exp-body">
          <div className="exp-col">
            <h1>
              적립된 캐시로<br/>
              <b><em><i/>쇼핑</em>을 즐겨보세요!</b>
              <span className="sub">
                적립된 캐시는 <br/>
                현금처럼 마음껏 커피, 케익 등의<br/>
                여러가지의 쿠폰 상품을 구매할 수 있습니다.
              </span>
            </h1>
          </div>
          <div className="exp-col">
              <img src="/img_friend_add_big.png" className="shopping-img" />
          </div>
        </div>
      </div>
    )
  }
}
