import React from 'react';
import { Route } from 'react-router-dom';

import { Proxmox } from './plugins';

// TODO query api for enabled servies

export default [<Route exact path="/proxmox" component={Proxmox} />];
