import { apiCall } from './api/api';

import {
    ADD_CURRENCY, REMOVE, EDIT_INPUT_VALUE
} from './constants'

//flow : from components file to this file, after this will go to reducers.js
export const addCurrency = (payload) => (dispatch) => {
    console.log(payload.curr);
    const currency = JSON.parse(payload.curr);
    apiCall(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency.curr}`)
        .then(data => dispatch({ type: ADD_CURRENCY, data: currency, rate: data, }))
}

export const remove = (payload) => ({ type: REMOVE, idx: payload.idx });

export const editInputValue = (payload) => ({ type: EDIT_INPUT_VALUE, input: payload.input }); 