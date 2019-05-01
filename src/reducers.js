import {
    ADD_CURRENCY, REMOVE, EDIT_INPUT_VALUE
} from './constants';

const currency = {
    currency: [
        {
            curr: 'IDR',
            name: 'Indonesian Rupiah',
            rate: 14200
        },
        {
            curr: 'JPY',
            name: 'Japanese Yen',
            rate: 111.7847533632
        }
    ],
    selection: [
        {
            id: '1',
            curr: 'CAD',
            name: 'Canadian Dollar'
        },
        {
            id: '2',
            curr: 'IDR',
            name: 'Indonesian Rupiah'
        },
        {
            id: '3',
            curr: 'GBP',
            name: 'British Pound Sterling'
        },
        {
            id: '4',
            curr: 'CHF',
            name: 'Swiss Franc'
        },
        {
            id: '5',
            curr: 'SGD',
            name: 'Singapore Dollar'
        },
        {
            id: '6',
            curr: 'INR',
            name: 'Indian Rupee'
        },
        {
            id: '7',
            curr: 'MYR',
            name: 'Malaysian Ringgit'
        },
        {
            id: '8',
            curr: 'JPY',
            name: 'Japanese Yen'
        },
        {
            id: '9',
            curr: 'KRW',
            name: 'Korean Won'
        }
    ],
    inputValue: 10.00
}

export const currencies = (state = currency, action = {}) => {
    switch (action.type) {
        //set searchField state
        case ADD_CURRENCY:
            return Object.assign({}, state,
                { currency: [...state.currency, { curr: action.data.curr, name: action.data.name, rate: action.rate.rates[`${action.data.curr}`] }] })

        case REMOVE:
            state.currency.splice(state.currency.findIndex(x => x.id === action.idx), 1);
            return Object.assign({}, state,
                { currency: [...state.currency] })

        case EDIT_INPUT_VALUE:
            return Object.assign({}, state,
                { inputValue: action.input })

        default:
            return state
    }
}

