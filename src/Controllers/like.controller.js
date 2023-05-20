
const like_model = require('../Models/like.model')

exports.create = async (req, res) => {
    try {
        await new like_model(req.body).save().then((docs) => {
            res.status(201).json({
                message: "Post created",
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

        await like_model.find().then((docs) => {
            res.status(201).json({
                message: "post retrieved successfully",
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
        await like_model.findOne({ _id: req.params.id }).populate("post").populate('user').then((docs) => {
            res.status(201).json({
                message: "post retrieved successfully",
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
        await like_model.updateOne({ _id: req.params.id }, req.body).then((docs) => {
            res.status(201).json({
                message: "post updated successfully",
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
        res.status(500).json({
            message: "abcd",
            status: false
        })
    }
}


exports.destroy = async (req, res) => {
    try {
        await like_model.deleteOne({ _id: req.params.id }).then(() => {
            res.status(201).json({
                message: "post deleted",
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
