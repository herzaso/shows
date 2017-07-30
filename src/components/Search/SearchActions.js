const searchTitleBegin = (value) => {
    return {type: "SEARCH_TITLE", isRunning: true, value}
}

const searchTitleEnd = (titles) => {
    return {type: "SEARCH_TITLE", isRunning: false, titles}
}

const searchTitle = (value) => {
    return function(dispatch) {
        dispatch(searchTitleBegin(value))
        return fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
            .then(
                response => response.json(),
                error => console.log('An error occured.', error))
            .then( list => {
                let titles = list
                    .filter(title => title.show.image)
                    .map(title => ({
                        id: title.show.id,
                        name: title.show.name,
                        genres: title.show.genres,
                        thumbnail: title.show.image.medium,
                        image: title.show.image.original,
                        summary: title.show.summary,
                    }))
                dispatch(searchTitleEnd(titles))
            })
    }
}

export { searchTitle }
