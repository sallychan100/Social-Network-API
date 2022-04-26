const {User} = require('../models')

const userController = {
    getAllUser(req, res){
        User.find({})
        .populate({
            path: 'thought',
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    getUserById({params}, res) {
        User.findOne({ _id: params.id})
        .populate({
            path: 'thought',
        })
        .populate({
            path: 'friends',
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },


}

module.exports = userController