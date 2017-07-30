import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import App from './App';
import './index.css'

const reducer = (state={}, action) => {
    console.log(action)
    switch (action.type) {
        case "SEARCH_TITLE":
            const newState = {...state, isRunning: action.isRunning}
            if (!action.isRunning)
                newState.titles = action.titles || [];
            return newState
        case "TOGGLE_LOGIN":
            return {...state, loggedIn: !state['loggedIn']}
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
