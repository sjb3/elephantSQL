var express = require('express');
var app = express()
var config = require('./config')
// console.log(config)
var DB = config.DB
var PORT = config.PORT
var models = require('./models')

app.get('/route', function(req, res){
  res.json({hello:'Is it working?'})
})
app.get('/hws', function(req, res){
  models.Hw.findAll(),then(function(hws){
    res.json(hws)
  })
})

models.sequelize.sync({force: true}).then(function(x){
  models.Hw.create(
        {
         country: "Pakistan",
         US_drone_strikes: "421",
         civilian_reported_killed: "423-965",
         children_reported_killed: "172-207"
       }),
  models.Hw.create(
       {
         country: "Yemen",
         US_drone_strikes: "107-127",
         civilian_reported_killed: "65-101",
         children_reported_killed: "8-9"
       }),
  models.Hw.create(
       {
         country: "Somalia",
         US_drone_strikes: "15-19",
         civilian_reported_killed: "0-5",
         children_reported_killed: "0"
       }),
  models.Hw.create(
       {
         country: "Afghanistan",
         US_drone_strikes: "48",
         civilian_reported_killed: "14-42",
         children_reported_killed: "0-18"
       });

  app.listen(PORT, function(){
    console.log('server started')
    console.log('listening on PORT: ' + PORT)
    console.log('DB URI STRING: ' + DB)
});
});
