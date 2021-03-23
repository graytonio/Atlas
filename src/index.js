require('dotenv').config();
const express = require('express');
const path = require('path');
const { json } = require('body-parser');
const { sequelize } = require('./db');
const { ServiceRouter, ClientRouter } = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/client', ClientRouter);
app.use('/api/service', ServiceRouter);

// Error Handler
app.use((err, req, res) => {
  console.log('ERROR');
  res.status(500).send('Something Broke');
});

sequelize.sync().then(() => {
  console.info('DB Synced');
  app.listen(port, () => console.info(`Server now listening on port ${port}`));
});
