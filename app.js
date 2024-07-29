require("dotenv").config();
const errorHandler = require("./middlewares/errorHandler");
const express = require('express');
const cors = require('cors');
const router = require("./routes/index");
const { successResponse } = require("./helpers/response");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	successResponse(req, res)
});

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Listening Port ${ port }`);
});
