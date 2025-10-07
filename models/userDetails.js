let users = [
    { id : 1, name : 'Ben'}
]
exports.getUsersAll = ()=>users

exports.createUser = (name)=>{
    const newUser = {id:users.length + 1, name}
    users.push(newUser)
    return newUser;
}

exports.updateUsers = (id, name)=>{
    const user = users.find(u=>u.id === id)
    if(user){
        user.name = name
        return user
    }
    else{
        return null
    }
}

exports.deleteUsers = (id)=>{
    const index = users.findIndex(u=>u.id === id)
    if(index !== -1){
        const deleted = users.splice(index, 1)
        return deleted[0]
    }
    else{
        return null
    }
}