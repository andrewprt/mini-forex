import React, { Component } from 'react'
import { connect } from 'react-redux';
import Currency from './Currency'

//get state from reducers.js (redux)
const mapStateToProps = (state) => {
    return {
        cart: state.currencies.currency
    }
}

//will loop from cart list, so each product will have their own individual Cart component
class CurrencyList extends Component {
    render() {
        const { cart } = this.props;
        return (
            cart.map((curr, i) => {
                return (
                    <Currency
                        key={i}
                        idx={i}
                        curr={curr}
                    />
                );
            })
        )
    }
}

//second parameter for dispatch can be left out if we only use mapStateToProps
export default connect(mapStateToProps)(CurrencyList);