import JSResource from './js-resource';
import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    component: JSResource('App', () => import('./App')),
    prepare: () => {return {}},
    routes: [
    ],
  },
];

export default routes;
