## FrontEnd : JavaScript & Jquery Code Pattern by ButterCode

### JavaScritp & Jquery Code

**Scoped Object & Function - Style**
기본 모듈 함수 정의 방법
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
**변수 선언 표기**
```javascript
var camelCase = "일반변수"; // 기본 변수
var $target = $('#target'); // 선택자는 앞에 $ 표기 (안붙혀도 무관)
var ACTION_STUATUS = "ACTION_STUATUS"; // flag에 관한건 대문자로 표기
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
// Click과 Function을 나누어 사용
var codeStart = function (parm1, parm2, event) {}
$('#id').on('click', 'div.keyword-group-del', codeStart.bind(this, 'parm1', 'parm1'));

// 스마트스킨 작업시 기본으로 사용
$('#id').on('click', function(){
    alert('클릭 완료')
});

// 중요한 Click Event에는 네임 스페이스를 사용
$('#id').on('click.targetOpen', function(){
    alert('팝업 오픈')
});
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
