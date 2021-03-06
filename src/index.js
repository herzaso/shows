import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import App from './App';
import ShowDetails from './components/ShowDetails/ShowDetails'
import ActorDetails from './components/ActorDetails/ActorDetails'
import './index.css'

const reducer = (state = {
    isRunning: false,
    loggedIn: true,
    restricted: false,
    query: '',
    titles: [],
    actor: {}
}, action) => {
    switch (action.type) {
        case "SEARCH_TITLE":
            const newState = {
                ...state,
                isRunning: action.isRunning,
                restricted: false
            }
            if (action.isRunning)
                newState.query = action.value || '';
            else
                newState.titles = action.titles || [];
            return newState
        case "TOGGLE_LOGIN":
            return {
                ...state,
                loggedIn: !state['loggedIn'],
                restricted: false
            }
        case "RESTRICT_ACTION":
            return {
                ...state,
                restricted: !state.loggedIn
            }
        case "SELECT_ACTOR":
            return {
                ...state,
                actor: action.actor
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path="/actors/:id" component={ActorDetails}/>
            <Route path="/shows/:id" component={ShowDetails}/>
            <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
