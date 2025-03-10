const { User } = require("../models")

const createUser = async(req,res) => {
    const {email, password} = req.body

    try{
        const user = await User.create({
            email,
            password
        })
        res.json(user)
    }catch(error){
        console.log(error)
        res.status(500).json({error : "Erro ao salvar usuário"})
    }
}

const getUsers = async(req,res) => {
   try{
        const Users = await User.findAll();
    res.json(Users)
   }catch(erro){
    console.log(error)
    res.status(500).json({error : "Erro ao buscar usuarios"})
   }
}
module.exports = {createUser, getUsers}