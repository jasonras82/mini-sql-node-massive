let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mainCtrl = require('./controller');
let app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/planes', mainCtrl.getPlanes);
app.post('/planes', mainCtrl.makePlane);

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
});
