## FrontEnd : JavaScript Code Pattern
### JavaSciprt / ES6

> **변수 선언 표기 방법**
```javascript
// 변수 끝 ; 미 사용
let name = '일반변수'
const constName = '상수'

// flag 대문자
const CURRENT_STATUS = "대문자로 표기"  

// 모듈은 대문자
const MODULE = {
  list(params){
    // todo..
  }
}
```

> **Arrow 함수 사용**
```javascript
// bad
arrayData.map( function(i,v) {}
const responsCall = function(){}

// good
arrayData.map((v,i) => {})
const responsCall = () =>{}

// bad
const MODULE = {
  data : 'name',
  comma : function() {
    // todo..
  }
}

// good
const MODULE = {
  data : 'name',
  comma () {
    // todo..
  }
}
```

> **선택자**
```javascript
// ID
document.getElementbyId('elm')
document.querySelector('elm')
document.querySelectorAll('elm')
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
// array map / forEach 자유롭게 사용
let arrayData = [1,2,3]

// return 값이 필요하면 map 사용
arrayData.map((v,i) => {
    // todo..
})

arrayData.forEach((v,i) => {
    // todo..
})
```

> **ARRARY Checker**
```javascript
if( Array.isArray(arr) ){
    // todo..
}
```

> **JSON map**
```javascript
let sampleData = {
    name : 'butter',
    sub : 'magarin'
}

// JSON key 체크
let JSONdata = Object.keys(sampleData)
JSONdata.map(function(v,i) {
   JSONdata[i].name
   JSONdata[i].sub
})
```

> **조건문**
```javascript
let sampleData = {
    name : 'butter',
    sub : 'magarin'
}

// JSON key 체크
let JSONdata = Object.keys(sampleData)
JSONdata.map(function(v,i) {
   JSONdata[i].name
   JSONdata[i].sub
})
```
