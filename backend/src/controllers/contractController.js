const {Contract} = require("../models")
const generatePdf = require("../utils/generatePdf")

const createContract = async(req, res) =>{
    const { content, userId } = req.body

    try{
        const contract = await Contract.create({
            content,
            userId
        })
        res.json(contract)
    }catch(error){
        console.error(error)
        res.status(500).json({error: "Erro ao salvar o contrato"})
    }
}

const getContracts = async(req,res) =>{
    const { userId } = req.query
    try{
        const contracts = await Contract.findAll({
            where: {
                userId: req.userId
            }
        })
        res.json(contracts)
    }catch(error){
        console.error(error)
        res.status(500).json({error: "Erro ao buscar os contratos"})
    }
}

const getContractByUser = async(req, res) => {
    const { id } = req.params

    try{
        const contract = await Contract.findByPk(id)
        if(!contract){
            return res.status(404).json({error: "Contrato não encontrado"})
        }
        res.json(contract)
    }catch(err){
        console.error(error)
        res.status(500).json({error: "Erro ao buscar o contrato"})
    }
}


const downloadContract = async (req,res) => {
    const { id } = req.params

    try{
        const contract = await Contract.findByPk(id)
        if(!contract){
            return res.status(404).json({error: "Contrato não encontrado"})
        }

        const pdf = generatePdf(contract.content)
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', `attachment; filename=contract-${id}.pdf`)
        pdf.pipe(res)
        pdf.end()
    }catch(e) {
        console.error(error)
        res.status(500).json({
            message : "Erro no servidor"
        })
    }
}

module.exports = {createContract, getContracts, getContractByUser, downloadContract}