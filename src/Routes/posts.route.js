const router = require("express").Router();
const {create, show, index, update, destroy } = require('../Controllers/post.controller')


router.post('/', create)
router.get('/', index)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', destroy)



module.exports = router;