## FrontEnd : JavaScript & Jquery3.0 Code Pattern
### JavaScritp & Jquery Code
### Product SMARTSKIN Standard Pattern

> **Scoped Object & Function - Style**
```javascript
var COMMON = (function () {
    "use strict"

    function BasePatterData(obj){
        // 프로토타입을 사용
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
        BasePatterData: BasePatterData,
    }
})();

var BasePatterData = new COMMON.BasePatterData({
    target : '#element', // id, class
    sends : 'sends'
})
```

> **LocalStorage & SessionStorage 사용**
```javascript
// 유저의 행동패턴을 위에 스토리지 사용
// 가능하면 스토리지 Key Name은 대문자로 사용
var viewCount = 2
LocalStorage.setItem('VIEW_COUNT_CHECKER', viewCount)

// Json 저장시
var obj = {
  count : 2,
  prdNum = 'N001002'
}

// 스토리지는 'String' 타입으로만 저장 가능
LocalStorage.setItem('SHOP_USER_INFO', JSON.stringfy(obj))

// 일반 키 가져오기
var getStorage = LocalStorage.getItem('SHOP_USER_INFO')

// JSON 타입일시
var getStorageConverter = JSON.parse(getStorage)
```


> **변수 표기**
```javascript
// 'name' :: '' 사용 "" 미사용
var camelCase = "일반변수"; // 기본 변수
var $target = $('#target'); // 선택자는 앞에 $ 표기 (안붙혀도 무관)
var ACTION_STUATUS = 'ACTION_STUATUS'; // flag에 관한건 대문자로 표기
```



> **var 사용**
```javascript
// 한개의 변수
var butter = '변수'

// 여러개 사용 시 콤마로 구문
var butter = '변수-1'
   ,magarin = '변수-2'
```


> **선택자 사용**
```javascript
// 선택자
var elm = $('#elm')

// 반복되는 선택자시 최초 위에서 한번만 선언
// find를 통해서 자식 선택자 선택
elm.find('.class').show()
elm.attr('href')


// 부모 선택자
var child = $('.child')

// bad
child.parent().parent().append('<b>insert</b>')

// good
child.closest('#parent').append('<b>insert</b>')
```


> **click과 Function 구분**
```javascript
// 재 사용성을 위하여 Click과 Function을 나누어 사용
var codeFn = function (parm1, parm2, event) {
  // todo..
}

$('#id').on('click', 'div.btn', codeFn.bind(this, 'parm1', 'parm1'))

// 중요한 Click Event에는 네임 스페이스를 사용
$('#id').on('click.nameSpace', 'div.btn', codeFn.bind(this, 'parm1', 'parm1'))
```



> **조건 완료 결과 삽입 시**
```javascript
// bad
if(false){
    $("#elm").text("TrueSampleText");
}else{
    $("#elm").text("falseSampleText");
}

// good
var domText = 'True'
if(false){
    domText = 'False'
}

$("#elm").text( domText );
```





> **each, append, html 사용 시**
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





> **Page Checker**
```javascript
if( document.location.search.indexOf('cart.html') != -1 ){
  $('#elm').show()
}
```


> **CSS Animation 권장**
```javascript
// jquery animation은 모바일 기기에서 느림

// bad
$('#elm').slideUp()

// good
$('#elm').addClass('slide-up-style') // css Animaiton은 css 파일에 미리 선언되어있어야 한다
```




> **Ajax Data Code**
```javascript
$.ajax({
  url: '/Product/detailInfoData',
  type: 'GET',
  dataType: 'json',
  data:{
    cate_no : '001',
    page : 1
  },
  success: function(response){
    var responseData = response
    if(typeof response === 'string'){
      responseData = JSON.parse(responseData)
    }

    $.each( responseData, function(i,v){
      // todo..
    })
  }
})
```
