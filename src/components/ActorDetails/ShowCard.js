import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ActorDetails.css'

const ShowCard = (params) => (
    <Link className={styles.card} to={"/shows/" + params.id}>
        <img className={styles.thumbnail} src={params.image.medium} alt={params.name} />
        <h2 className={styles.title}>{params.name}</h2>
        <h3 className={styles.genres}>{params.genres.join(', ')}</h3>
    </Link>
)

export default ShowCard;
