const express = require('express');
var morgan = require('morgan')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
let cors = require('cors');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:id', (req, res)=> {
  console.log(req.params.id);
  res.sendFile('/Users/cms287/Documents/hrr37/FEC/ua-cody-proxy/proxy/public/index.html');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});