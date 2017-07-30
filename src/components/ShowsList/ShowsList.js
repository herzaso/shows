import React, { Component } from 'react'
import './ShowsList.css'

class ShowsList extends Component {
    constructor() {
        super();
        this.state = {
            titles: []
        }
    }

    componentWillMount() {
        fetch('https://api.tvmaze.com/search/shows?q=a')
            .then( response => response.json() )
            .then( list => {
                let titles = list.filter(title => title.show.image)
                    .map(title => ({
                        id: title.show.id,
                        name: title.show.name,
                        genres: title.show.genres,
                        thumbnail: title.show.image.medium,
                        image: title.show.image.original,
                        summary: title.show.summary,
                    }))
                this.setState({ titles })
            } );
    }

    render() {
        console.log("rendering ShowsList again..............")
        let titles = getVisibleTitles(this.state);
        return (
            <div className='showsList'>
                {titles.map(title => (
                    <ShowCard key={title.id} {...title} onTitleClick='' />
                ))}
            </div>
        );
    }
}

const getVisibleTitles = (state) => {
    if (!state.search || state.search.length === 0)
        return state.titles;

    return state.titles.filter(title => title.name.contains(state.search))
}

const ShowCard = (params) => (
    <div className='card' onClick={params.onTitleClick}>
        <img className='thumbnail' src={params.thumbnail} alt={params.name} />
        <h2 className='title'>{params.name}</h2>
        <h3 className='genres'>{params.genres.join(', ')}</h3>
    </div>
)

export default ShowsList
