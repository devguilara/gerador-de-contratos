const express = require("express")
const Template = require("../models/Templates")

const router = express.Router()

router.get("/", async(req,res) => {
    try {
        const templates = await Template.findAll()
        res.json(templates)
    }catch(error){
        console.error(error)
        res.status(500).json({
            message : "Erro no servidor"
        })
    }
})
module.exports = router