# FrontEnd : JavaScritp Code Pattern by ChanCode


> Stacked locally scoped Object Literal -  BaseCode Style
```javascript
const PRODUCTSET = (function () {
    "use strict"

    let privateMethod = function () {
        // console.log();
    }

    let AdmKeyword = {
        eDom: {
            name : $("#name"),
            nameList : $(".name-list"),
            string: {
                prd : '.product'
                list : '.list'
            }
        },
        
        run: function () { 
            this.set();
        },     
                
    }
    AdmKeyword.run();
    
    return AdmKeyword;
})();
```


### Tables
```javascript
// bad
var a = '';

// good
let a = '';

// good
let data;
if(true){
 data = 'obj Insert';
}
el.html(data);
```




