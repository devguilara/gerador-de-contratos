const bycript = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {User} = require("../models")

const register = async (req, res) => {
    const {email, password} = req.body
    try {
        const existingUser = await User.findOne({
            where: {email}
        })
    
        if (existingUser) {
            return res.status(400).json({error: "Já existe um usuário com esse e-mail"})
        }

        const salt = await bycript.genSalt(10);
        const hashedPassword = await bycript.hash(password, salt);

        const user = await User.create({
            email,
            password: hashedPassword
        })

        const token = jwt.sign(
            {id: user.id}, 
            process.env.JWT_SECRET, 
            {expiresIn: "1d"}
        )

        res.json({token})


    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Erro ao registrar o usuário"})
    }
}

const login = async(req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.findOne(
            {
                where : {email}
            }
        )
        if(!user){
            return res.status(400).json({
                message : "Credenciais Inválidas"
            })
        }

        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            return res.status(400).json({
                message : "Credenciais Inválidas"
            })
        }

        const token = jwt.sign({
            userId: user.id
        },
        process.env.JWT_SECRET,
        {expiresIn: "1d"})

        res.json({
            token
        })
    }catch (err) {
        console.error(err)
        res.status(500).json({
            message: "Falha ao fazer login"
        })
    }
}

module.exports = {
    register,
    login
}