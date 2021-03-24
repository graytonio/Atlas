const { Service } = require('../db');

const createService = ({ name, url, icon }) =>
  Service.create({ name, url, icon });

const getServiceById = ({ id }) => Service.findByPk(id);

const getAllServices = ({ perPage, page, field, order }) =>
  Service.findAndCountAll({
    limit: perPage,
    offset: (page - 1) * perPage,
    order: [[field, order]],
  });

const updateService = ({ id, service }) =>
  Service.update(service, { where: { id } });

const deleteService = ({ id }) =>
  Service.destroy({
    where: {
      id,
    },
  });

module.exports = {
  createService,
  getServiceById,
  getAllServices,
  updateService,
  deleteService,
};
