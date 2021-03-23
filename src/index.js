require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const { sequelize } = require('./db');
const { ServiceRoutes } = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(json());

app.use(express.static('dist'));

app.use('/api/service', ServiceRoutes);

// Error Handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Something Broke');
});

sequelize.sync().then(() => {
  console.info('DB Synced');
  app.listen(port, () => console.info(`Server now listening on port ${port}`));
});
