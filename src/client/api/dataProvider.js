import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    console.log(field, order);

    const query = {
      field,
      order,
      page: JSON.stringify(page),
      perPage: JSON.stringify(perPage),
      filter: JSON.stringify(params.filter),
    };

    const url = `/api/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ json }) => ({
      data: json.data.rows,
      total: json.data.count,
    }));
  },

  getOne: (resource, params) =>
    httpClient(`/api/${resource}/${params.id}`).then(({ json }) => ({
      data: json.data,
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };

    const url = `/api/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json.data }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      pagination: JSON.stringify([page, perPage]),
      filter: JSON.stringify({
        ...params.filter,
        [params.taget]: params.id,
      }),
    };

    const url = `/api/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ json }) => ({
      data: json.data,
      total: json.total,
    }));
  },

  update: (resource, params) =>
    httpClient(`/api/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json.data })),

  updateMany: (resource, params) => {
    const promsises = params.ids.map((id) =>
      httpClient(`/api/${resource}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
      }).then(({ json }) => json.data)
    );

    return Promise.all(promsises).then((records) => ({
      data: records,
    }));
  },

  create: (resource, params) =>
    httpClient(`/api/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.data.id },
    })),

  delete: (resource, params) =>
    httpClient(`/api/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json.data })),

  deleteMany: (resource, params) => {
    const promsises = params.ids.map((id) =>
      httpClient(`/api/${resource}/${id}`, {
        method: 'DELETE',
      }).then(({ json }) => json.data)
    );

    return Promise.all(promsises).then((records) => ({
      data: records,
    }));
  },
};
