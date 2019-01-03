> tutorial
: http://beomy.tistory.com/35


> **Redux 사용시 체크해봐야 할것**
```
- 스토어를 개별적으로 사용할건지 전체에서 관리 할것인지 (경험으로는 페이지마다 개별 관리가 용이)
- dumb component 경우 defaultProps를 필수적으로 선언
```


> **mapStateToProps**
```javascript
/* props 전달받을 Component에 연결 함수 */

class ReChecker2 extends Component{
    render(){
        return(
            <div>
                {this.props.userAction}
            </div>
        )
    }
}

ReChecker2.defaultProps = {
    userAction: 'stranger'
}

const mapStateToProps = (state) => {
    return {
        userAction: state.reduxDataProps.userAction,
    };
}

ReChecker2 = connect(mapStateToProps)(ReChecker2);
export default ReChecker2
```
