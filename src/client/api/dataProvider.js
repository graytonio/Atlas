import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {},
  getOne: (resource, params) => {},
  getMany: (resource, params) => {},
  getManyReference: (resource, params) => {},
  update: (resource, params) => {},
  updateMany: (resource, params) => {},
  create: (resource, params) => {},
  delete: (resource, params) => {},
  deleteMany: (resource, params) => {},
};
