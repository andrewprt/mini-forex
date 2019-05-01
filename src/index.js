import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './styles/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { currencies } from './reducers';


//logger for redux so it will log activites in browser console
const logger = createLogger()

//for reducers in reducers.js
const rootReducers = combineReducers({ currencies })

//initialize store for reducers with loggers
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
