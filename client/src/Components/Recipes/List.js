import { useEffect } from 'react';
import PropTypes from 'prop-types';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';

import Recipe from './Recipe';
import Pagination from './Pagination';

import { inGroupsOf } from '../../utils';

const perPage = 52;

const List = ({ filter, onPageChange }) => {
  const {
    recipePagination: { recipes, totalCount },
  } = useLazyLoadQuery(
    graphql`
      query ListQuery(
        $page: Int
        $query: String
        $sortBy: String
        $sortDirection: String
        $vegetarian: Boolean
        $courseId: ID
        $seasonId: ID
      ) {
        recipePagination(
          page: $page
          query: $query
          sortBy: $sortBy
          sortDirection: $sortDirection
          vegetarian: $vegetarian
          seasonId: $seasonId
          courseId: $courseId
        ) {
          recipes {
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
          totalCount
        }
      }
    `,
    filter,
    { fetchPolicy: 'store-or-network' }
  );

  useEffect(() => {
    if (recipes.length === 0 && filter.page > 0) {
      onPageChange(Math.ceil(totalCount / perPage));
    }
  }, [filter.page, onPageChange, recipes.length, totalCount]);

  const renderRecipe = (recipe) => (
    <Recipe key={recipe.databaseId} recipe={recipe} />
  );

  return (
    <>
      <Pagination
        onChange={onPageChange}
        page={filter.page}
        totalPages={Math.ceil(totalCount / perPage)}
      />
      <div style={{ color: 'black' }}>
        {inGroupsOf(recipes, 4).map((group, idx) => (
          <div key={idx} className="row mb-4">
            {group.map(renderRecipe)}
          </div>
        ))}
      </div>
      <Pagination
        onChange={onPageChange}
        page={filter.page}
        totalPages={Math.ceil(totalCount / perPage)}
      />
    </>
  );
};

List.propTypes = {
  filter: PropTypes.object,
  onPageChange: PropTypes.func.isRequired,
};

export default List;
