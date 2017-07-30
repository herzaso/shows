import React from 'react';
import './Login.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Login = ({ loggedIn, toggleLogin }) => (
    <div className="container">
        Act as Logged in
        <label className="switch">
            <input type="checkbox"
                defaultChecked={!loggedIn}
                onChange={toggleLogin} />
            <span className="slider round"></span>
        </label>
    </div>
);

Login.propTypes = {
    loggedIn: PropTypes.bool,
    toggleLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = (state) => {
    return {
        toggleLogin
    }
}

const toggleLogin = () => ({
    type: "TOGGLE_LOGIN"
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
