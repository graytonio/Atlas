const { Router } = require('express');
const { ServiceController } = require('../controllers');
const { sendResponse } = require('../helpers');

const router = Router();

router.post('/', async (req, res, next) => {
  const { name, url, icon } = req.body;
  const results = await ServiceController.createService({
    name,
    url,
    icon,
  }).catch(next);

  sendResponse({ res, results });
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const results = await ServiceController.getServiceById(id).catch(next);

  sendResponse({ res, results });
});

router.get('/', async (req, res, next) => {
  const { field = 'id', order = 'ASC', page = 1, perPage = 25 } = req.query;

  const results = await ServiceController.getAllServices({
    field,
    order,
    page,
    perPage,
  }).catch(next);

  sendResponse({ res, results });
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const service = req.body;
  const results = await ServiceController.update({
    id,
    service,
  }).catch(next);

  sendResponse({ res, results });
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  const results = await ServiceController.destroy({ id }).catch(next);

  sendResponse({ res, results });
});

module.exports = router;
