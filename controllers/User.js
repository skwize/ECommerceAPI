const { UserModel } = require("../models/models")
const bcrypt = require("bcrypt")


module.exports = {
    
    getData: async (req, res, next) => {
        try {
            const data = await UserModel.findByPk(req.user.id, {
                attributes: {
                    exclude: 'password'
                }
            })
            res.status(400).json(data)
        } catch (err) {
            next(err)
        }
    },

    getOtherUser: async (req, res, next) => {
        try {
            const user = await UserModel.findByPk(req.body.userId, {
                attributes: {
                    exclude: 'password'
                }
            })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    },


    settings: {

        changeAvatar: async (req, res, next) => {
            try {
                const file = req.file

                const updatedData = await UserModel.update({
                    avatarUrl: `http://localhost:3001/${file.name}`
                },{
                    where: {
                        id: req.user.id
                    }
                })

                res.status(200).json(updatedData)
            } catch (err) {
                next(err)
            }
        },

        changeEmail: async (req, res, next) => {
            try {
                const newEmail = req.body.email

                const updatedData = await UserModel.update({
                    email: newEmail,
                }, {
                    where: {
                        id: req.user.id
                    }
                })

                res.status(200).json(updatedData)
            } catch (err) {
                next(err)
            }
        },

        changeUsername: async (req, res, next) => {
            try {
                const newUsername = req.body.username

                const updatedData = await UserModel.update({
                    username: newUsername,
                }, {
                    where: {
                        id: req.user.id
                    }
                })

                res.status(200).json(updatedData)
            } catch (err) {
                next(err)
            }
        },

        changePassword: async (req, res, next) => {
            try {
                const newPassword = req.body.password

                const updatedData = await UserModel.update({
                    password: bcrypt.hash(password, 7),
                }, {
                    where: {
                        id: req.user.id
                    }
                })

                res.status(200).json(updatedData)
            } catch (err) {
                next(err)
            }
        }
    }
}