const userList = require('../models/userDetails')

exports.getUsers=((req,res)=>{
    res.send(userList.getUsersAll())
})

exports.createNewUser=((req, res)=>{
    res.send(userList.createUser(req.body.name))
})

exports.updateUser=(req, res)=>{
    const id = parseInt(req.params.id)
    const name = req.body.name
    const updatedUser = userList.updateUsers(id, name)
    if(updatedUser){
        res.send(updatedUser)
    }
    else{
        res.status(400).send('User not found')
    }
}

exports.deleteUser=(req, res)=>{
    const id = parseInt(req.params.id)
    const deletedUser = userList.deleteUsers(id)
     if(deletedUser){
        res.json({"message": "User Deleted", "User": deletedUser})
    }
    else{
        res.status(400).send('User not found')
    }
}