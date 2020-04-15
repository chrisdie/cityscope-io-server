var express = require('express');
var cors = require('cors')
var app = express();
app.use(express.json());

app.use(cors())

const port = 3001;

// storing the json globally
let cityiojson = { test: "test"}

app.get('/', cors(), (req, res) => {
    res.send(cityiojson);
});

// get the global json
app.get('/hdm-test', cors(), (req, res) => {
    res.send(cityiojson);
});
 
// set the global json
app.post('/hdm-test', cors(), function(request, response){
    //console.log('request: ' + JSON.stringify(request.body))
    cityiojson = request.body
    response.send(request.body);    // echo the result back - not needed for cityio - just for debugging
  });

app.listen(port, () => console.log(`Hello This is the cityIO server replacement on port ${port}!`))
