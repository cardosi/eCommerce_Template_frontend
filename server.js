var express = require('express'),
    app = express();
    router = require('angular-ui-router');

var port = 3001 || process.env.PORT;

app.use(express.static('public'));


app.listen(port, function() {
  console.log('Well hey there from port: ', port);
});
