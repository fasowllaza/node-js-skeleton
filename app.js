require("dotenv").config();

const errorHandler = require("./middlewares/errorHandler");
const express = require('express');
const cors = require('cors');
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.status(200).json({ msg: "FINAL PROJECT TPU SERVER" });
});

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Listening Port ${ port }`);
});
