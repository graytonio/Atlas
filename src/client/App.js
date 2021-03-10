import React from "react";
import { Admin, Resource } from "react-admin";

import dataProvider from "./api/dataProvider";

export default function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
    </Admin>
  );
}
