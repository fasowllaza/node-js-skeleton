const authentication = require('./middlewares/authentication')
const errorHandler = require("./middlewares/errorHandler")
const userController = require('./controllers/user')
const recruitmentController = require('./controllers/recruitment')
const express = require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/register", userController.registerUser)
app.post("/login", userController.loginUser )
app.use(authentication)
app.get('/getJob', recruitmentController.getRecruitment)
app.get('/getDetail/:id', recruitmentController.getRecruitmentDetail)

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Listening Port ${port}`);
})
