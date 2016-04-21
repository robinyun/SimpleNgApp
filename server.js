var express = require('express');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));

app.use(express.static('public'));

//REST

//GET --> Similar to using the Youtube API
//GET /video/id => returns that video and id, picture

//POST --> Send our own info over to Youtube
//Creating a new video


//UPDATE --> Get that video uploaded and change the content
//Updating content

//DELETE --> Delete the video

app.get('/:name', function(req, res, next){

    //Pre-work

    var name = firstLetterCaps(req.params.name);
    res.send('Hello ' + name);
    });

function firstLetterCaps(name){

  var firstLetter = name.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  name = firstLetter + name.substr(1);
  return name;
}

// app.get('/', function(req, res, next){
//     res.send('Hey there');
// });

app.listen(3000, function(){
    console.log("Server is running on 3000");
});
