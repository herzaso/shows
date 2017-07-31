import React from 'react'
import styles from './ShowDetails.css'

const ActorCard = (params) => {
    return (
        <div className={styles.card}>
            <img className={styles.thumbnail} src={params.character.image ? params.character.image.medium : null} alt={params.character.name} />
            <h3 className={styles.title}>{params.character.name}</h3>
        </div>
    )
}

export default ActorCard;
