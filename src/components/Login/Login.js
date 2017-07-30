import React from 'react';
import { toggleLogin } from './LoginActions'
import './Login.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Login = ({ loggedIn, toggleLogin }) => (
    <div className="container">
        Act as Logged in
        <label className="switch">
            <input type="checkbox"
                defaultChecked={loggedIn}
                onChange={toggleLogin} />
            <span className="slider round"></span>
        </label>
    </div>
);
Login.propTypes = {
    loggedIn: PropTypes.bool,
    toggleLogin: PropTypes.func.isRequired
}
Login.defaultProps = {
    loggedIn: true
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(
    mapStateToProps,
    { toggleLogin }
)(Login);
