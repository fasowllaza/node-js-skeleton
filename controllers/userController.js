const {User} = require("../models")
const {decode, encode} = require("../helpers/bcrypt")
const {sign} = require("../helpers/jwt")

class Controller{
    static registerUser(req, res, next) {
        let userData = {
            username:req.body.username,
            password:req.body.password
        }
        userData.password = encode(userData.password)
        User
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
    static loginUser(req, res, next){
        let userData = {
            username:req.body.username,
            password:req.body.password,
        }
        User
        .findOne({
            where:{
                username: userData.username
            }
        })
        .then((data)=>{
            if(data){
                if(decode(userData.password,data.password)){
                    let payload = {
                        username: data.username
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