//LESSON const router = require('express').Router()
const db = require("../models")

const { User, Prescription } = db

router.post('/prescriptions', async (req, res) => {
    if(req.currentUser.role === 'doctor'){
        const prescription = await Prescription.create(req.body)
        res.json(prescription)
    } else {
        // Refuse to send the prescription
        res.status(403).json({ 
            message: "You are not allowed to create a prescription"
        })
    }
})


