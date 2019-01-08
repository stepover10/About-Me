import React, { Component } from 'react';

export default class HeaderMenu extends Component{
    state = {
        init : this.props.init
    }

    /*
    shouldComponentUpdate(nextProps, nextState, nextContext) {}
    componentDidMount() {}
    componentWillReceiveProps(nextProps) {}
    componentDidUpdate() {}
    componentWillUnmount() {}
    */

    render(){
        return(
            <div>
                {this.props.init}
            </div>
        )
    }
}