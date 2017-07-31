import React from 'react';
import { connect } from 'react-redux';
import styles from './Search.css';
import { searchTitle } from './SearchActions'

const Search = ({ loggedIn, query, onSearch }) => (
    <div className={styles.container}>
        <input type="text" className={styles.input} defaultValue={query}
            ref={input => { this.input = input; }} />
        <button className={styles.button}
            disabled={!loggedIn}
            onClick={() => onSearch(this.input.value)}>
            Search
        </button>
    </div>
)

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
    query: state.query
})

export default connect(
    mapStateToProps,
    {onSearch: searchTitle}
)(Search);
