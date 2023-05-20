const router = require("express").Router();
const {create, index, show, update, destroy} = require('../Controllers/comment.controller')


router.post('/', create)
router.get('/', index)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router;