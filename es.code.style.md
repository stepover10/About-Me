## FrontEnd : JavaScript & Jquery Code Pattern by ButterCode

### JavaScritp & Jquery Code

**Scoped Object & Function - Style**
```javascript
var COMMON = (function () {
    "use strict"

    function BasePatterData(obj){
        var proto = BasePatterData.prototype

        proto.init = function(obj) {
            this.method( obj.sends )
        }
        
        proto.method = function(param) {
            alert(param)
        }
        
        this.init(obj)
    }
    
    return {
        BasePatterData: BasePatterData, // 카테고리 가공 공통 모듈
    }
})();

var BasePatterData = new COMMON.BasePatterData({
    target : 'element',
    sends : 'sends'
})


```
**변수 선언 표기 방법**
```javascript
const BUTTERCODE = "대문자로 표기"; // 상수
var camelCase = "일반변수";         // 기본 변수

```

**var, const를 사용**
```javascript
var butter = '';

if(true){
    var butterData = 'obj Insert';
    $('.class').html(butterData);
}

```


**click과 Function 구분**
```javascript
var codeStart = function (parm1, parm2, event) {
    // this === event
    // ... todo
}

$('#id').on('click', 'div.keyword-group-del', codeStart.bind(this, 'parm1', 'parm1'));
```


**조건문 사용시 삼항연사자를 이용**
```javascript
// bad
if(status){
    $("el").text("TrueSampleText");
}else{
    $("el").text("falseSampleText");
}

// good
var statusText = ( status ) ? 'TrueSampleText' : 'falseSampleText';
$("el").text("SampleText");
```



###Ajax Data Code - ButterStyle





###Jquery UIUX Code - ButterStyle**

**Callback을 권장 예) fadeIn()**
```javascript
$('el').fadeIn("step1_category_off", function () {
    sampleTestFn();
});
```

**삼항 연산자를 이용한 Jquery 코드 줄이기**
```javascript
var statusFade = (status === true) ? 'fadeIn' : 'fadeOut'
$(".class").[statusFade]()
```
