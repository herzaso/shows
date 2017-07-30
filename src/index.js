import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import './index.css'

const reducer = (state={}, action) => {
    switch (action.type) {
        case "SEARCH_TITLE":
            console.log("SEARCH!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            return {...state, search: action.value};
        case "TOGGLE_LOGIN":
            console.log("LOGIN!!!!!!!!!!!!!!!!!!!!!!!!!!!", !state['loggedIn'])
            return {...state, loggedIn: !state['loggedIn']}
        default:
            return state;
    }
}

const store = createStore(reducer, {})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
