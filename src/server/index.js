require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const { initDB, createService, getService, deleteService } = require('./db');

initDB()
  .then(() => console.info('DB Initialized'))
  .catch((e) => console.error(e));

const app = express();
const port = process.env.PORT || 8080;

app.use(json());

app.use(express.static('dist'));
app.post('/api/service', async (req, res) => {
  const { icon, name, url } = req.body;
  const results = await createService({ icon, name, url });
  console.debug(results);
  res.json(results);
});

app.get('/api/service/:name', async (req, res) => {
  const { name } = req.params;
  const results = await getService({ name });
  console.debug(results);
  if (!results)
    res
      .status(404)
      .json({ success: false, message: `Service with name ${name} not found` });
  res.status(200).json({ success: true, data: results });
});

app.get('/api/service', async (req, res) => {
  const results = await getService();
  console.debug(results);
  res.json(results);
});

app.delete('/api/service/:id', async (req, res) => {
  const { id } = req.params;
  const results = await deleteService({ id });
  res.json(results);
});

app.listen(port, () => console.info(`Server now listening on port ${port}`));
