import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadShow, selectActor } from './ShowDetailsActions'
import SeasonCard from './SeasonCard'
import ActorCard from './ActorCard'
import styles from  './ShowDetails.css'

class ShowDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            show: {}
        }
    }
    componentDidMount() {
        loadShow(this.props.match.params.id)
            .then(show => {
                this.setState({show})
            })
    }

    render() {
        const show = this.state.show
        return (
            <div className={styles.container}>
                <div className={styles.twoColumns}>
                    <h2 className={styles.title}>{show.name}</h2>
                    <h3 className={styles.genres}>{(show.genres || []).join(', ')}</h3>
                    <span className={styles.description} dangerouslySetInnerHTML={{__html: show.summary}}></span>
                    {show.image ?
                        <img className={styles.image} src={show.image.original} alt={show.name} />
                        : ''}
                </div>
                <div className={styles.list}>
                    { show._embedded ? show._embedded.seasons.map(season => (
                        <SeasonCard key={season.id} {...season} />
                    )) : '' }
                </div>
                <div className={styles.list}>
                    { show._embedded ? show._embedded.cast.map(char => (
                        <Link key={char.character.id} to={"/actors/" + char.person.id} onClick={() => this.props.onActorSelected(char.person)}>
                            <ActorCard {...char} />
                        </Link>
                    )) : '' }
                </div>
            </div>
        )
    }
}

export default connect(null, {onActorSelected: selectActor})(ShowDetails);
