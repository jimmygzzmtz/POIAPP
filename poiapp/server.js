var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(path.resolve(__dirname, "www")));

app.get('/home', function (req, res) {
    res.redirect('/');
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
 console.log("listening to Port", app.get("port"));
});