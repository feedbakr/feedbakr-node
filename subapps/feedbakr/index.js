/**
 * Main Feedbakr Sub App
 */
var express = require('express')
var app = module.exports = express();




app.get('/', function(req, res){
    res.json({message: "** Feedbakr running! **"})
})


app.set('views', __dirname + '/views/demoTrials')
app.set('view engine', 'jade');
