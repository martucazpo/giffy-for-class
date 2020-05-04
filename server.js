require('dotenv').config()

const express = require("express");
const app = express();
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

router.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(3000, () => console.log('The server is ALWAYS listening'));