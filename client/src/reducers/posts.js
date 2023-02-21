export default (posts = [], action) => {
    switch (action.tye) {
        case "FETCH_ALL":
            return posts;
        case "CREATE":
            return posts;
        default:
            return posts;
    }
}