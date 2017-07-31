import React from 'react'
import { loadActorShows } from './ActorDetailsActions'
import ShowCard from './ShowCard'
import styles from  './ActorDetails.css'

class ActorDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            shows: []
        }
    }

    componentDidMount() {
        loadActorShows(this.props.match.params.id)
            .then(shows => {
                this.setState({shows})
            })
    }

    render() {
        const actor = this.props.location
        const shows = this.state.shows
        return (
            <div className={styles.container}>
                <div className={styles.twoColumns}>
                    <h2 className={styles.title}>{actor.name}</h2>
                    {actor.image ?
                        <img className={styles.image} src={actor.image} alt={actor.name} />
                        : ''}
                </div>
                <div className={styles.list}>
                    { shows.map(show => (
                        <ShowCard key={show._embedded.show.id} {...show._embedded.show} />
                    )) }
                </div>
            </div>
        )
    }
}

export default ActorDetails;
