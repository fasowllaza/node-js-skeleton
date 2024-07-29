const {User} = require("../models")
const {decode, encode} = require("../helpers/bcrypt")
const {sign} = require("../helpers/jwt")
const { successResponse, errorResponse } = require("../helpers/response")
const errorMapping = require("../helpers/errorMapping")
const { DATABASE_ERRORS, USER_ERRORS } = require("../constant/error")

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
            successResponse(req, res)
        })
        .catch((err)=>{
            errorMapping(next, DATABASE_ERRORS[err.name], err)
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
                    successResponse({access_token})
                }
                else{
                    errorMapping(next, USER_ERRORS['USER-002'])
                }
            }
            else{
                errorMapping(next, USER_ERRORS['USER-002'])
            }
        })
        .catch((error)=>{
            next(error)
        })
    }
}

module.exports = Controller