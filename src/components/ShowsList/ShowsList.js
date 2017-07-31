import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './ShowsList.css'
import ShowCard from './ShowCard'
import { blockAction } from './ShowsListActions'

class ShowsList extends React.Component {
    onTitleClick(e) {
        if (!this.props.loggedIn) {
            e.preventDefault();
            this.props.onTitleClick()
        }
    }

    render() {
        return (
            <div className={styles.showsList}>
                <div className={styles.errorToast} style={{visibility: this.props.restricted ? 'visible' : 'hidden'}}>User is blocked! Please log in!</div>
                {this.props.titles.length ? this.props.titles.map(title => (
                    <Link key={title.id} className={styles.card} to={"/shows/" + title.id}
                        onClick={(e) => this.onTitleClick(e)}>
                        <ShowCard {...title} />
                    </Link>
                )) : <span className={styles.error}>Search term must not be void</span>}
            </div>
        );
    }
}
ShowsList.propTypes = {
    titles: PropTypes.array,
    loggedIn: PropTypes.bool,
    restricted: PropTypes.bool
}
ShowsList.defaultProps = {
    titles: []
}

const mapStateToProps = (state) => ({
    titles: state.titles,
    loggedIn: state.loggedIn,
    restricted: state.restricted,
})

export default connect(
    mapStateToProps,
    {onTitleClick: blockAction}
)(ShowsList)
