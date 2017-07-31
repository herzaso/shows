import React from 'react'
import styles from './ShowsList.css'

const ShowCard = (params) => (
    <div className={styles.card}>
        <img className={styles.thumbnail} src={params.thumbnail} alt={params.name} />
        <h2 className={styles.title}>{params.name}</h2>
        <h3 className={styles.genres}>{params.genres.join(', ')}</h3>
    </div>
)

export default ShowCard;
