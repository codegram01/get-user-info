const users = []

const usersCache = []
/*
    userCache = {
        id: user_id // we need id (user_id) to know what userPromise is who 
        userPromise: promise user return
    }
*/

async function get_user(id) {
    const idf = users.findIndex(user => user.id == id);
    if(idf >= 0) {
        return users[idf]
    }

    const idfCache = usersCache.findIndex(userCache => userCache.id == id)
    if(idfCache >= 0){
        return usersCache[idfCache].userPromise
    }

    const userPromise = fetch(`/users/${id}`).then(resUser => {
        const idfRes = resUser.findIndex(user => user.id == id);
        if(idfRes < 0) {
            users.push(resUser)
        }
        const idfCache = usersCache.findIndex(userCache => userCache.id == res.id)
        if(idfCache >= 0) {
            usersCache.value.splice(idfCache, 1)
        }

        return resUser;
    });

    usersCache.push({
        id: id,
        userPromise: userPromise
    })

    return userPromise;
}