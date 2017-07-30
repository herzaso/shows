import React from 'react';
import Search from './components/Search/Search'
import ShowsList from './components/ShowsList/ShowsList'
import Login from './components/Login/Login'
import './App.css'

const App = () => (
    <div>
        <div className="header">
            <h1>Shows</h1>
        </div>
        <div className="actions">
            <Search />
            <Login />
        </div>
        <ShowsList />
    </div>
);

export default App;
