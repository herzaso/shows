import React from 'react'
import styles from './ShowDetails.css'

const SeasonCard = (params) => (
    <div className={styles.extendedCard}>
        <img className={styles.thumbnail} src={params.image ? params.image.medium : null} alt={params.name} />
        <div>
            <h3 className={styles.title}>Season: {params.number}, {params.episodeOrder} Episodes<br/>({params.premiereDate} - {params.endDate})</h3>
            <span className={styles.description} dangerouslySetInnerHTML={{__html: params.summary}}></span>
        </div>
    </div>
)

export default SeasonCard;
