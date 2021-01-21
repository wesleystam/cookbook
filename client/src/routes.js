import JSResource from './js-resource';
import { loadQuery } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';

const routes = [
  {
    component: JSResource('App', () => import('./App')),
    prepare: () => {return {}},
    routes: [
      {
        path: '/',
        exact: true,
        component: JSResource('Recipes', () => import('./Components/Recipes')),
        prepare: () => { 
          const RecipesQuery = require('./Components/Recipes/__generated__/RecipesQuery.graphql');
          return {
            recipesQuery: loadQuery(
              RelayEnvironment,
              RecipesQuery,
              { query: '' },
              { fetchPolicy: 'store-or-network' },
            ),
          }
        },
      },
    ],
  },
];

export default routes;
