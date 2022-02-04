var expr4ess = require('express');
var app = express();

var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public/index.html"));
app.get('/', function(req, res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("app running");
})