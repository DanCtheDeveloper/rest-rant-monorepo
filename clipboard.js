const router = require('express').Router()
const db = require("../models")

const { User, Prescription } = db

router.post('/prescriptions', async (req, res) => {


    if(req.currentUser.role === 'doctor'){

    let prescription = await Prescription.create(req.body)
    res.json(prescription)
} else {
    res.status(404).json({ message: `You are not a doctor` })
}
})