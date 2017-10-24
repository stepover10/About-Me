# FrontEnd : JavaScritp & Jquery Code Pattern by ButterCode

### Stacked locally scoped Object Literal - BasePattern Style
```javascript
const PRODUCTSET = (function () {
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
                prd : '.product'
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
> 변수 선언 표기 방법
```javascript
const PRODUCTSET = "대문자로 표기";
let camelCase = "일반변수";

```




> let, const를 사용
```javascript
let a = '';

if(true){
    let data = 'obj Insert';
    $('.class').html(data);
}

```


> click과 Function 구분
```javascript
// this === evt
let dataFn = function (parm1, parm2, evt) {
    // ... todo
}

$('#id').on('click', 'div.keyword-group-del', dataFn.bind(this, 'parm1', 'parm1'));
```



> UIUX 코드 작성 시 Jquery Callback을 권장 예) fadeIn
```javascript
$('el').fadeIn("step1_category_off", function () {
    sampleTestFn();
});
```
