const loadActorShows = (id) => {
    return fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`)
        .then(
            response => response.json(),
            error => console.log('An error occured.', error))
}

export { loadActorShows }
