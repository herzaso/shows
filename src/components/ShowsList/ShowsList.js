import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './ShowsList.css'

const ShowsList = ({ titles }) => {
    console.log("rendering ShowsList again..............")
    return (
        <div className={styles.container}>
        <div className={styles.showsList}>
            {titles.length ? titles.map(title => (
                <ShowCard key={title.id} {...title} onTitleClick='' />
            )) : <span className={styles.error}>Search term must not be void</span>}
        </div>
        </div>
    );
}
ShowsList.propTypes = {
    titles: PropTypes.array
}
ShowsList.defaultProps = {
    titles: []
}

const mapStateToProps = (state) => ({
    titles: state.titles
})

const ShowCard = (params) => (
    <div className={styles.card} onClick={params.onTitleClick}>
        <img className={styles.thumbnail} src={params.thumbnail} alt={params.name} />
        <h2 className={styles.title}>{params.name}</h2>
        <h3 className={styles.genres}>{params.genres.join(', ')}</h3>
    </div>
)

export default connect(mapStateToProps)(ShowsList)
