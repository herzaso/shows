import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './ShowsList.css'
import ShowCard from './ShowCard'

const onTitleClick = (e, loggedIn) => {
    if (!loggedIn) {
        e.preventDefault();
    }
}

const ShowsList = ({ titles, loggedIn }) => {
    return (
        <div className={styles.container}>
        <div className={styles.showsList}>
            {titles.length ? titles.map(title => (
                <Link key={title.id} className={styles.card} to={"/shows/" + title.id}
                    onClick={(e) => onTitleClick(e, loggedIn)}>
                    <ShowCard {...title} />
                </Link>
            )) : <span className={styles.error}>Search term must not be void</span>}
        </div>
        </div>
    );
}
ShowsList.propTypes = {
    titles: PropTypes.array,
    loggedIn: PropTypes.bool
}
ShowsList.defaultProps = {
    titles: []
}

const mapStateToProps = (state) => ({
    titles: state.titles,
    loggedIn: state.loggedIn
})

export default connect(
    mapStateToProps
)(ShowsList)
