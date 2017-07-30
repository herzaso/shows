import React from 'react';
import Search from './components/Search/Search'
import ShowsList from './components/ShowsList/ShowsList'
import Login from './components/Login/Login'
import styles from './App.css'

const App = () => (
    <div>
        <div className={styles.header}>
            <h1>Shows</h1>
        </div>
        <div className={styles.actions}>
            <Search />
            <Login />
        </div>
        <ShowsList />
    </div>
);

export default App;
