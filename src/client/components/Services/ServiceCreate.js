import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export default function (props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="icon" />
        <TextInput source="name" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
}
