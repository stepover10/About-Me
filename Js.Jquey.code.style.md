## FrontEnd : JavaScript & Jquery3.0 Code Pattern
### JavaScritp & Jquery Code
### Product SMARTSKIN Standard Pattern

**Scoped Object & Function - Style**
# 기본 모듈 함수 정의 방법
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
    target : '#element', // id, class
    sends : 'sends'
})
```

**# 변수 선언 표기**
```javascript
// 'name' :: '' 사용 "" 미사용
var camelCase = "일반변수"; // 기본 변수
var $target = $('#target'); // 선택자는 앞에 $ 표기 (안붙혀도 무관)
var ACTION_STUATUS = 'ACTION_STUATUS'; // flag에 관한건 대문자로 표기
```

**var 사용**
```javascript
var butter = '변수';

// 여러개 사용 시 콤마로 구문
var butter = '변수-1'
   ,magarin = '변수-2'
```


**click과 Function 구분**
```javascript
// 재 사용성을 위하여 Click과 Function을 나누어 사용
var codeFn = function (parm1, parm2, event) {
  // todo..
}

$('#id').on('click', 'div.btn', codeFn.bind(this, 'parm1', 'parm1'));

// 중요한 Click Event에는 네임 스페이스를 사용
$('#id').on('click.nameSpace', 'div.btn', codeFn.bind(this, 'parm1', 'parm1'));
```


**조건 완료 결과 삽입 시**
```javascript
// bad
if(false){
    $("el").text("TrueSampleText");
}else{
    $("el").text("falseSampleText");
}

// good
var domText = 'True'
if(false){
    domText = 'False'
}

$("#el").text( domText );
```


**each, append, html 사용 시**
```javascript
// element each
$('.target li').each(function(i,v) {
    var that = $(this)
       ,index = i++

    that.append('<i class="ico">BEST' + index + '</**>')
})

// object each
var objSample = {
  front : 'Javasciprt'
  name : 'Butter'  
}

var appendHtml = 'init'
$.each(objSample, function(i,v) {
    appendHtml += '<div>' + v.name + '</div>'
})

// 변수에 삽입 정보를 삽입 후 마지막에 append or html
$('#elm').append( appendHtml ) // or html
```





###Ajax Data Code - ButterStyle
**제목입력**
```javascript
```




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
