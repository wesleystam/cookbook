import PropTypes from 'prop-types';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import Recipe from './Recipe';

import { inGroupsOf } from '../../utils';

const List = (props) => {
  const data = useLazyLoadQuery(
    graphql`
      query ListQuery(
        $cursor: String
        $query: String
        $sortBy: String
        $sortDirection: String
        $vegetarian: Boolean
        $courseId: ID
        $seasonId: ID
      ) {
        recipes(
          after: $cursor
          first: 52
          query: $query
          sortBy: $sortBy
          sortDirection: $sortDirection
          vegetarian: $vegetarian
          seasonId: $seasonId
          courseId: $courseId
        ) @connection(key: "Recipies_recipes") {
          edges {
            __id
            node {
              databaseId
              name
              cookingTime
              course {
                name
              }
              recipePhotos {
                urlThumb1x
                urlThumb2x
              }
            }
          }
        }
      }
    `,
    props.filter,
    { fetchPolicy: 'store-or-network' }
  );

  const renderRecipe = (recipe) => (
    <Recipe key={recipe.cursor} recipe={recipe.node} />
  );

  return (
    <div style={{ color: 'black' }}>
      {inGroupsOf(data.recipes.edges, 4).map((group, idx) => (
        <div key={idx} className="row mb-4">
          {group.map(renderRecipe)}
        </div>
      ))}
    </div>
  );
};

List.propTypes = {
  filter: PropTypes.object,
};

export default List;
