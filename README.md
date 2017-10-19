# FrontEnd : JavaScritp Code Pattern by ChanCode

> Stacked locally scoped Object Literal - BasePattern Style
```javascript
const PRODUCTSET = (function () {
    "use strict"

    let privateLet
    let privateMethod = function () {
        privateLet = {
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


> let, const를 사용 var은 미사용
```javascript
let a = '';

if(true){
    let data = 'obj Insert';
    $('.class').html(data);
}

```









