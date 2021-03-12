import * as React from 'react';
import { ImageField, List, TextField, UrlField, Datagrid } from 'react-admin';

export default function (props) {
  return (
    <List {...props}>
      <Datagrid>
        <ImageField source="icon" />
        <TextField source="id" />
        <TextField source="name" />
        <UrlField source="url" />
      </Datagrid>
    </List>
  );
}
