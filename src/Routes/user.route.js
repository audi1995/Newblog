const router = require("express").Router();
const {create, index, show, update, destroy} = require('../Controllers/user.controller')


router.post('/signup', create)
router.get('/', index)
router.get('/:id', show)
router.put('/:id', update)
router.delete('/:id', destroy)


module.exports = router;