import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editInputValue } from '../actions';

//get state from reducers.js (redux)
const mapStateToProps = (state) => {
    return {
        inputValue: state.currencies.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editInputValue: (param) => dispatch(editInputValue({ input: param.target.value }))
    }
}

class InputValue extends Component {
    render() {
        const { inputValue, editInputValue } = this.props;

        return (
            <input className="currency--inputForm" onChange={editInputValue} defaultValue={inputValue} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputValue);