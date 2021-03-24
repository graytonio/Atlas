import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ServiceList, ServiceCreate } from './components/Services';

import dataProvider from './api/dataProvider';
import customRoutes from './customRoutes';

export default function App() {
  return (
    <Admin dataProvider={dataProvider} customRoutes={customRoutes}>
      <Resource name="service" list={ServiceList} create={ServiceCreate} />
    </Admin>
  );
}
