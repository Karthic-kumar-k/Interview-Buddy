const express = require('express');
const app = express()

var bodyParser = require('body-parser')
const path = require('path')
const fileUpload = require('express-fileupload');

require('dotenv').config();

// Body-parser middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(fileUpload());


app.set("views", path.join(__dirname))
app.set("view engine", "ejs")


const port = process.env.PORT || 8011;

app.listen(port,
    ()=> console.log(`Server Started on port ${port}...`))


require('./Backend/Routes/getUploadPage')(app);
require('./Backend/Routes/uploadToS3')(app);