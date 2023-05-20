const Comment_model = require('../Models/comment.model')

exports.create = async (req, res) => {
    try {
        await new Comment_model(req.body).save().then((docs) => {
            res.status(201).json({
                message: "comment created",
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
        await Comment_model.find().then((docs) => {
            res.status(201).json({
                message: "comment retrieved successfully",
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
        await Comment_model.findOne({ _id: req.params.id }).populate('user').populate('post').then((docs) => {
            res.status(201).json({
                message: "comment retrieved successfully",
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
        await Comment_model.updateOne({ _id: req.params.id }, ...req.body).then((docs) => {
            res.status(201).json({
                message: "comment updated successfully",
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
        await Comment_model.deleteOne({ _id: req.params.id }).then(() => {
            res.status(201).json({
                message: "comment deleted",
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
