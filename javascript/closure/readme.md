## Javasciprt Closure

- Scope Hoisting에 대한 이해가 먼저 필요하다
- 클로저를 사용하여 외부에서 변수에 직접 접근하는 것을 제한
- 클로저 = 함수 + 함수를 둘러싼 환경(Lexical environment)
- 개념적으로 자바스크립트의 모든 함수는 클로저이지만, 실제로 우리는 자바스크립트의 모든 함수를 전부 클로저라고 부르지는 않는다.
- 함수 내부에 함수를 작성할 때마다, 여러분은 클로저를 생성한 것입니다. 내부에 작성된 함수가 바로 클로저죠
- 함수 밖에서 선언된 변수를 함수 내부에서 사용할 때

## Code

```javasciprt
function outerFunction () {
  const outer = 'I see the outer variable!'

  /* This Closure */
  function innerFunction() {
    console.log(outer)
  }
  return innerFunction
}
outerFunction()() // I see the outer variable!
```


## Site
- https://meetup.toast.com/posts/86
- https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19
