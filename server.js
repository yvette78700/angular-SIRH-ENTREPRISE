// Install express server
const express = require('express');
const path = require('path');

const app = express();

// serve only the static files form the dist directory
app.use(express.static(_dirname + '/dist/<my-app'));

app.get('/*' ,function(req,res){
    res.sendfile(path.join(_dirname+'/dist/<my-app>/index.html'));
});

// start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);