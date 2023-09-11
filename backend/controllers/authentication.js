const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

<<<<<<<<< Temporary merge branch 1
    if(!user || !await bcrypt.compare(req.body.password, user.passwordDigest)){
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        res.json(user)
    }
})


=========
    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        res.json({ user })
    }
})

>>>>>>>>> Temporary merge branch 2
module.exports = router
