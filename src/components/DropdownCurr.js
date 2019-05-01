import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrency } from '../actions';

const mapStateToProps = (state) => {
    return {
        selection: state.currencies.selection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCurrency: (param) => dispatch(addCurrency({ curr: param.selected }))
    }
}

class DropdownCurr extends Component {
    constructor(props) {
        super(props);
        this.state = { input: false, selected: '' };
    }

    buttonClickHandler = () => {
        this.setState({ input: true });
    }

    changeHandler = (event) => {
        alert(event.target.value);
        this.setState({ selected: event.target.value });
    }

    render() {
        const { selection, addCurrency } = this.props;
        const { input, selected } = this.state;
        return (
            input === false ?
                <button onClick={this.buttonClickHandler}>{'(+) Add More Currencies'}</button>
                :
                <div>
                    <select onChange={this.changeHandler}>
                        {
                            selection.map((item, idx) => {
                                return (
                                    <option key={idx}
                                        value={JSON.stringify(item)}>{item.curr} - {item.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button onClick={() => addCurrency({ selected })}>Submit</button>
                </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCurr);