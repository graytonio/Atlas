import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ServiceList } from './components/Services';

import dataProvider from './api/dataProvider';

export default function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="service" list={ServiceList} />
    </Admin>
  );
}
