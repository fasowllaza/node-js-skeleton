const {Users} = require("../models")
const {decode, encode} = require("../helpers/bcrypt")
const {sign} = require("../helpers/jwt")
const { emailValidation, passwordValidation } = require("../helpers/validation")

class Controller{
    static registerUser(req, res, next) {
        const {
            email,
            password,
            role
        } = req.body
        if (!emailValidation(email)) {
            next({name:"BadRequest", message:"Email Invalid"})
        }
        if (!passwordValidation(password)) {
            next({name:"BadRequest", message:"The password must be composed of 8 alphanumeric characters and must contain at least one uppercase letter. It cannot contain special characters."})
        }
        let userData = {    
            email,
            password,
            role
        }
        userData.password = encode(password)
        Users
        .create(userData)
        .then((data)=>{
            res.status(201).json({
                name:data.name,
                msg:"Account Created"
            })
        })
        .catch((err)=>{
            if(err.name==="ServerError"){
                next({name: "ServerError", message:err.message})
            }
            else{
                next({name: "SequelizeValidationError", err})
            }
        })
    }
    static loginUser(req, res, next) {
        const {
            email,
            password
        } = req.body
        Users
        .findOne({
            where:{
                email
            }
        })
        .then((data)=>{
            if(data){
                if(decode(password,data.password)){
                    let payload = {
                        role: data.role
                    }
                    const access_token = sign(payload)
                    res.status(200).json({access_token})
                }
                else{
                    next({name:"BadRequest", message:"Invalid username/password"})
                }
            }
            else{
                next({name:"BadRequest", message:"Invalid username/password"})
            }
        })
        .catch((err)=>{
            next({name: "ServerError", message:err.message})
        })
    }
}

module.exports = Controller