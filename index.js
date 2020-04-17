const express = require('express');
const app = express();
const port = 30001;

//serving static file
app.use(express.static('public'));

app.set('view engine', 'ejs');

require('./routes')(app);

app.listen(port, () => {
  console.log('server is running' + port);
});
