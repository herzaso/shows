import React from 'react';
import { toggleLogin } from './LoginActions'
import styles from './Login.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Login = ({ loggedIn, toggleLogin }) => (
    <div className={styles.container}>
        Act as Logged in
        <label className={styles.switch}>
            <input type="checkbox"
                defaultChecked={loggedIn}
                onClick={toggleLogin} />
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    </div>
);
Login.propTypes = {
    loggedIn: PropTypes.bool,
    toggleLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
})

export default connect(
    mapStateToProps,
    { toggleLogin }
)(Login);
