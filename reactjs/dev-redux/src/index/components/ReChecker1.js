import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../store/actions'

class ReChecker1 extends Component{
    reduxTestFun(){
        this.props.userAction('전달성공')
    }

    render(){
        return(
            <div onClick={this.reduxTestFun.bind(this)}>
                ReChecker1
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAction: (a,b) => dispatch( userAction(a,b) ),
    }
}

ReChecker1 = connect(undefined, mapDispatchToProps)(ReChecker1);

export default ReChecker1