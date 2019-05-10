var express = require('express');
var path = require('path')
var app = express();

const router = express.Router()
router.get('/home', function (req, res) {
    res.send('root')
})
app.use(router)

app.use(express.static(path.resolve(__dirname, "www")));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
 console.log("listening to Port", app.get("port"));
});