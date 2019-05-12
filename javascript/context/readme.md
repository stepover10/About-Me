## Javasciprt Context
- this > this 키워드를 사용하는 값이 할당됨. 참조객체가 없으면 전역객체 참조. 
- 실행컨텍스트는 실행되는 코드의 한 덩어리라 생각하면 된다
- 전역 객체 프로퍼티를 보고싶다면 크롬개발자도구에서 window를 치고 엔터
- ECMAScript 에서는 실행 컨텍스트를 "실행 가능한 코드를 형상화하고 구분하는 추성적인 개념"으로 기술한다.
- 자바스크립트에서 작성하는 코드는 항상 컨텍스트에 속하게 되는데  context란 그 속에서 코드가 돌아가는 객체를 일컫는다.
- context는 this 변수를 통해 동작하고 this 변수는 코드가 속한 객체를 가리킨다

## Code
```javasciprt
console.log(this); // window 전역 컨텍스트

function TestContext(){
    this.nameUser = 'James'; // TestContext Function의 컨텍스트에 nameUser 생성
    // this는 TestContext 를 카르킴    
}

function context1(){  
    console.log("first context");
};
 
function context2(){  
    context1();
    console.log("second context");                                                                       
};
 
context2(); 
```

## Site
https://hamait.tistory.com/464
https://jinbroing.tistory.com/78