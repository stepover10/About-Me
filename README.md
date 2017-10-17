# FrontEnd : JavaScritp Code Pattern by ChanCode

# Stacked locally scoped Object Literal
const ProductSETcreate = (function () {
    "use strict"

    let privateMethod = function () {
        // console.log();
    }

    let AdmKeyword = {    
        init: function () {
 
        }
    }

    AdmKeyword.init();

    return AdmKeyword;
})();



// bad
var a = '';

// good
let a = '';

let data;
if(true){
 data = 'obj Insert';
}


