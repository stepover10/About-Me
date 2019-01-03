## FrontEnd : JavaScript Code Pattern
### JavaScript / ES6

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

> **비교문**
```javascript
// bad
( 1 == 1 )
( 1 != 1 )

// good
( 1 === 1 )
( 1 !== 1 )
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
// 조건이 3개 이하일때 if 사용
if(true){ }
if(true){ }else{ }
if(true){ }else if{ }


// 조건이 3개 이상일 경우 switch문 사용
switch (flag) {
  case type1:      
    break;
  case type2:      
    break;
  case type3:      
    break;    
}
```

> **Attribute**
```javascript
// 엘리먼트 값 가져오기
let get = elm.getAttribute( 'attributename' )

// 엘리먼트 값 세팅
let set = elm.setAttribute("class", "democlass");
```

> **Document A tag Move**
```javascript
document.querySelectorAll('.scrollLink').forEach( anchor => {
  anchor.addEventListener('click', function (event) {
      event.preventDefault()        
      document.getElementById( this.getAttribute('data-href') ).scrollIntoView({
         block: 'start',  
         behavior: 'smooth'
      })
  })
})
```

> **Multiple Css Style & Babel**
```javascript
Object.assign( element.style,{
    display : "block",
    opacity : "0"
})
```


>**Object.assign**
```javascript
// 객체 복사 또는 병합 함수
var first = { name: "Bob" };
var last = { lastName: "Smith" };

var person = Object.assign(first, last);
console.log(person);

// Output:
// { name: "Bob", lastName: "Smith" } 
```
