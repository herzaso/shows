import React from 'react';
import { connect } from 'react-redux';
import './Search.css';

const Search = ({ loggedIn, onSearch }) => (
    <div className='container'>
        <input type="text" className="input" />
        <button className="button" disabled={loggedIn} onClick={onSearch}>
            Search
        </button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSearch: searchTitles
});

const searchTitles = (value) => ({
    type: "SEARCH_TITLE",
    value
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
