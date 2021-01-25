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
              { },
              { fetchPolicy: 'store-or-network' },
            ),
          }
        },
      },
      {
        path: '/recepten/nieuw',
        exact: false,
        component: JSResource('NewRecipe', () => import('./Components/NewRecipe')),
        prepare: () => { 
          const NewRecipeQuery = require('./Components/NewRecipe/__generated__/NewRecipeQuery.graphql');
          return {
            newRecipeQuery: loadQuery(
              RelayEnvironment,
              NewRecipeQuery,
              {},
              { fetchPolicy: 'store-or-network' },
            ),
          }
        },
      },
      {
        path: '/recepten/:id',
        exact: false,
        component: JSResource('Recipe', () => import('./Components/Recipe')),
        prepare: (params) => { 
          const RecipeQuery = require('./Components/Recipe/__generated__/RecipeQuery.graphql');
          return {
            recipeQuery: loadQuery(
              RelayEnvironment,
              RecipeQuery,
              { id: params.id },
              { fetchPolicy: 'store-or-network' },
            ),
          }
        },
      },
    ],
  },
];

export default routes;
