import React from 'react'
import { connect } from 'react-redux';
import { remove } from '../actions';

//get state from reducers.js (redux)
const mapStateToProps = (state) => {
    return {
        inputValue: state.currencies.inputValue
    }
}

// flow: this dispatch() will go to actions.js
const mapDispatchToProps = (dispatch) => {
    return {
        remove: (param) => dispatch(remove({ idx: param.idx }))
    }
}

const Currency = (props) => {
    //we get props.product from CurrencyList component
    const { curr, name, rate } = props.curr;
    //get removeFromCurrency from mapDispatchToProps
    const { inputValue, remove } = props;

    // function to format string to have thousand separators
    function formatMoney(rate) {
        return rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    const formatTotal = formatMoney(rate * inputValue);

    return (
        <div className="currency--item">
            <div className="currency--content">
                <div className="currency--item_header">
                    <div>{curr}</div>
                    <div>{rate * inputValue}</div>
                </div>
                <div>{curr} - {name}</div>
                <div>1 USD = {curr} {rate}</div>
            </div>
            <div className="currency--remove" onClick={() => remove(props.idx)}>(-)</div>
        </div>
    )
}

//first parameter must be null if we only use mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Currency);