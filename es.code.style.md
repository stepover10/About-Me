## FrontEnd : JavaScript & Jquery Code Pattern

### JavaSciprt / ES6

**모듈 스크립트는 객체 리터럴 형태로 작업**
```javascript
var ModuleJS = {
  fn1 : function () {
    // todo...
  },

  fn2 : function (opt) {
    this.name = opt.name
  }
}

ModuleJS.fn1();
ModuleJS.fn2({
  name : 'Butter'
});
```

**let, const를 사용**
```javascript
let name = ''
const name1 = ''
```


**변수 선언 표기 방법**
```javascript
const BUTTERCODE = "대문자로 표기";  // 상수
let camelCase = "일반변수";         // 기본 변수

```



**조건문 사용시 삼항연사자를 이용**
```javascript
// bad
const getDom = document.getElementbyId('elm')
if(status){
    getDom.innerText = 'TrueSampleText';
}else{
    getDom.innerText = 'falseSampleText';
}

// good
const getDom = document.getElementbyId('elm')
let statusText = ( status ) ? 'TrueSampleText' : 'falseSampleText';
getDom.innerText = statusText;
```
