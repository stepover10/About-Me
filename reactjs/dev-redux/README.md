> tutorial
: http://beomy.tistory.com/35


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
