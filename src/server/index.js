require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const { Service, sequelize } = require('./db');

const app = express();
const port = process.env.PORT || 8080;

app.use(json());

app.use(express.static('dist'));

function sendResults(res, results) {
  if (results === null || results === undefined)
    return res.status(404).json({
      success: false,
      statusCode: 404,
      statusMessage: 'Resource Not Found',
    });

  return res.status(200).json({
    success: true,
    data: results,
  });
}

// Create Service
app.post('/api/service', async (req, res, next) => {
  const { name, url, icon } = req.body;
  const results = await Service.create({ name, url, icon }).catch(next);

  sendResults(res, results);
});

// Get Service by ID
app.get('/api/service/:id', async (req, res, next) => {
  const { id } = req.params;
  const results = await Service.findByPk(id).catch(next);

  sendResults(res, results);
});

// Get All Services
app.get('/api/service', async (req, res, next) => {
  const {
    field = 'id',
    order = 'ASC',
    page = 1,
    perPage = 25,
    filter = {},
  } = req.query;

  const results = await Service.findAndCountAll({
    where: JSON.parse(filter),
    limit: perPage,
    offset: (page - 1) * perPage,
    order: [[field, order]],
  }).catch(next);

  sendResults(res, results);
});

// Update Service
app.put('/api/service/:id', async (req, res) => {});

// Delete Servicep
app.delete('/api/service/:id', async (req, res, next) => {
  const { id } = req.params;
  const results = await Service.destroy({
    where: {
      id,
    },
  }).catch(next);

  sendResults(res, results);
});

// Error Handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Something Broke');
});

sequelize.sync().then(() => {
  console.info('DB Synced');
  app.listen(port, () => console.info(`Server now listening on port ${port}`));
});
