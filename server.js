const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require("cors");
app.use(cors({
  origin: 'http://localhost:9669',
}));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


//memanggil routes
var routes = require('./routes')
routes(app);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
