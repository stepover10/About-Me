## FrontEnd : JavaScript Code Pattern
### JavaSciprt / ES6


> **let, const를 사용**
```javascript
let name = ''
const constName = ''
```


> **변수 선언 표기 방법**
```javascript
const CURRENT_STATUS = "대문자로 표기"  // 상수
let camelCase = "일반변수";        // 기본 변수
```


> **조건문 사용시 삼항연사자를 이용**
```javascript
// bad
const getDom = document.getElementbyId('elm')
if(status){
    getDom.innerText = 'TrueSampleText'
}else{
    getDom.innerText = 'falseSampleText'
}

// good
const getDom = document.getElementbyId('elm')
let statusText = ( status ) ? 'TrueSampleText' : 'falseSampleText';
getDom.innerText = statusText;
```


> **ARRARY map**
```javascript
// array forEach 사용
let arrayData = [1,2,3]
arrayData.map((v,i) => {
    // todo..
})
```
