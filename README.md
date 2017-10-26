## FrontEnd : JavaScritp & Jquery Code Pattern by ButterCode

### JavaScritp & Jquery Code

**Stacked locally scoped Object Literal - BasePattern Style**
```javascript
const BUTTERCODE = (function () {
    "use strict"

    let privateData;
    let privateMethod = function () {
        privateData = {
            name : 'Butter'
        }
    }

    let BasePatterData = {
        eDom: {
            name : $("#name"),
            nameList : $(".name-list"),
            string: {
                prd : '.product',
                list : '.list'
            }
        },

        method: function () {
            this.method.prototype._getInfo_ = function (parms) {
            }
            this.method.prototype._getInfo_();
        },
        
        run: function () { 
            this.set();
        },    
    }

    BasePatterData.run();    
    return BasePatterData;
})();


```
**변수 선언 표기 방법**
```javascript
const BUTTERCODE = "대문자로 표기"; // 상수
let camelCase = "일반변수";         // 기본 변수

```



**let, const를 사용**
```javascript
let butter = '';

if(true){
    let butterData = 'obj Insert';
    $('.class').html(butterData);
}

```


**click과 Function 구분**
```javascript
let dataFn = function (parm1, parm2, evt) {
    // this === evt
    // ... todo
}

$('#id').on('click', 'div.keyword-group-del', dataFn.bind(this, 'parm1', 'parm1'));
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
let statusText = ( status ) ? 'TrueSampleText' : 'falseSampleText';
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
let statusFade = (status === true) ? 'fadeIn' : 'fadeOut'
$(".class").[statusFade]()
```

