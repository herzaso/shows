import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ShowDetails.css'

const ActorCard = (params) => {
    const to = {
        pathname: "/actors/" + params.person.id,
        name: params.person.name,
        image: params.person.image ? params.person.image.original : null
    }
    return (
        <Link className={styles.card} to={to}>
            <img className={styles.thumbnail} src={params.character.image ? params.character.image.medium : null} alt={params.character.name} />
            <h3 className={styles.title}>{params.character.name}</h3>
        </Link>
    )
}

export default ActorCard;
