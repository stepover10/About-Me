## Javasciprt Hoisting
- let이나 const를 사용하여 예방, Closure같은 문법들의 효용성을 이해하기 위해서 고전 자바스크립트가 가졌던 특징을 이해
- 변수의 선언문을 유효 범위의 최상단으로 끌어올리는 행위
- 선언과 할당의 분리'라고 생각
- 호이스팅 시 선언문은 유효 범위의 최상단으로 올라감

## Code
```javasciprt
// 호이스팅이 일어남
if ( true ) {
  var name = 'BUTTER';
}
console.log(name); // BUTTER

// 호이스팅이 일어나지 않음
if ( false ) {
  var name = 'BUTTER';
}

console.log(name); // error

// 호이스팅이 일어남 i가 function으로 삽입
function HoistingTest(){
  for ( var i=0; i<5; i++ ){
    // do something
  }
  console.log(i); // 5
}

HoistingTest();
```


## Site
https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85Hoisting