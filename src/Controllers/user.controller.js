const User_model = require('../Models/user.model')

exports.create = async (req, res) => {
    try {
        await new User_model(req.body).save().then((docs) => {
            res.status(201).json({
                message: "user created",
                data: docs,
                status: true
            })
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
                status: false
            })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}   


exports.index = async (req, res) => {
    try {
        await User_model.find().then((docs) => {
            res.status(201).json({
                message: "users retrieved successfully",
                data: docs,
                status: true
            })
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
                status: false
            })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}   

exports.show = async (req, res) => {
    try {
        await  User_model.findOne({_id: req.params.id}).then((docs) => {
            res.status(201).json({
                message: "user retrieved successfully",
                data: docs,
                status: true
            })
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
                status: false
            })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}   


exports.update = async (req, res) => {
    try {
        console.log(req.body);
        await User_model.updateOne({_id: req.params.id}, ...req.body).then((docs) => {
            res.status(201).json({
                message: "user updated successfully",
                data: docs,
                status: true
            })
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
                status: false
            })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}   


exports.destroy = async (req, res) => {
    try {
        console.log(req.body);
        await User_model.deleteOne({_id: req.params.id}).then(() => {
            res.status(201).json({
                message: "user deleted",
                data: {},
                status: true
            })
        }).catch((err) => {
            res.status(401).json({
                message: err.message,
                status: false
            })
        })
    } catch (err) {
        res.status(500).json(err)
    }
}   
