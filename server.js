var express =  require("express");
var bodyParser = require("body-parser");
var app = express();
var router = require("./router");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const path = require("path");



app.use(bodyParser.urlencoded({extended :true}));
router(app);



//connect to mongoose DB
mongoose.connect("mongodb://rick:rick@ds127993.mlab.com:27993/letgo");


app.use(express.static(__dirname + '/public'));



//middleware
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    }

    else {
        next();
    }
});



app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


app.listen(PORT, function () {
    console.log(`express server is up on port ${PORT}`);
});

