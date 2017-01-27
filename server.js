var express = require('express'),
    app = express();

var port = 3001 || process.env.PORT;

app.use(express.static('public'));


app.listen(port, function() {
  console.log('Well hey there');
});
