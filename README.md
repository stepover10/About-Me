# FrontEnd : JavaScritp & Jquery Code Pattern by ChanCode

> Stacked locally scoped Object Literal - BasePattern Style
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
            this.method.prototype.getInfo = function (parms) {
            }
        },
        
        run: function () { 
            this.set();
        },    
    }

    BasePatterData.run();    
    return BasePatterData;
})();
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
let dataFn = function (parm1, parm2, evt) {
    // ... todo
}

$('#id').on('click', 'div.keyword-group-del', dataFn.bind(this, 'parm1', 'parm1'));
```



> UIUX 코드 작성 시 Jquery Callback을 권장
