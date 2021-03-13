import * as React from 'react';
import { ImageField, List, TextField, UrlField, Datagrid } from 'react-admin';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    RaImageField: {
      image: {
        height: '5vh',
      },
    },
  },
});

export default function (props) {
  return (
    <ThemeProvider theme={theme}>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <ImageField source="icon" />
          <TextField source="name" />
          <UrlField source="url" />
        </Datagrid>
      </List>
    </ThemeProvider>
  );
}
