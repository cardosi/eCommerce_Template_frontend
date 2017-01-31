var express = require('express'),
    path = require('path'),
    app = express();

var port = 3001 || process.env.PORT;

app.use(express.static(path.join(__dirname,'public')));


app.listen(port, function() {
  console.log('Well hey there from port: ', port);
});
