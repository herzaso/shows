const loadShow = (id) => {
    return fetch(`https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`)
        .then(
            response => response.json(),
            error => console.log('An error occured.', error))
}

const selectActor = (actor) => {
    return {type: "SELECT_ACTOR", actor}
}

export { loadShow, selectActor }
