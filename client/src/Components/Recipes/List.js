import PropTypes from 'prop-types';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import CardDeck from 'react-bootstrap/CardDeck';
import Recipe from './Recipe';

const List = (props) => {
  const data = useLazyLoadQuery(
    graphql`
      query ListQuery(
        $cursor: String
        $query: String 
        $sortBy: String
        $sortDirection: String
        $vegetarian: Boolean
        $courseId: ID,
        $seasonId: ID 
      ) {
        recipes(
          after: $cursor, 
          first: 52, 
          query: $query, 
          sortBy: $sortBy,
          sortDirection: $sortDirection,
          vegetarian: $vegetarian,
          seasonId: $seasonId, 
          courseId: $courseId
        )
        @connection(key: "Recipies_recipes") {
          edges {
            __id
            node {
             databaseId name cookingTime course { name } recipePhotos { url }
            }
          }
        }
      }
   `,
    props.filter,
    { fetchPolicy: 'store-or-network' },
  );

  const renderRecipe = (recipe) => (
    <Recipe key={recipe.cursor} recipe={recipe.node} />
  );

  return(
    <div style={{ color: 'black' }}>
      {inGroupsOf(data.recipes.edges, 4).map((group, idx) => (
        <CardDeck key={idx} className="mb-5">
          {group.map(renderRecipe)}
        </CardDeck>
      ))}
    </div>
  );
};

List.propTypes = {
  filter: PropTypes.object,
};

export default List;

const inGroupsOf = (array, number) => {
  let groupsArray = [];

  for (let i = 0; i < (array.length / number); i++) {
    groupsArray[i] = [];
  }
  array.forEach((item, i) => {
    groupsArray[parseInt(i / number)] = [...groupsArray[parseInt(i / number)], item];
  });

  return groupsArray;
};
