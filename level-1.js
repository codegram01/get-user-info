
async function get_user(id) {
    const resUser = await fetch(`/users/${id}`);
    
    return resUser;
}