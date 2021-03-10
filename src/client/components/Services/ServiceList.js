import * as React from 'react';
import { ImageField, List, TextField, UrlField } from 'react-admin';

export default function (props) {
  return (
    <List {...props}>
      <ImageField source="icon" />
      <TextField source="id" />
      <TextField source="name" />
      <UrlField source="url" />
    </List>
  );
}
