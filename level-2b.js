const users = []

async function get_user(id) {
    const idf = users.findIndex(user => user.id == id);
    if(idf >= 0) {
        return users[idf]
    }

    const userPromise = fetch(`/users/${id}`).then(resUser => {
        const idfRes = resUser.findIndex(user => user.id == id);
        if(idfRes < 0) {
            users.push(resUser)
        }

        return resUser;
    });

    return userPromise;
}
