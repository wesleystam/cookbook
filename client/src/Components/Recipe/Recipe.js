import PropTypes from 'prop-types';
import { usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faChevronLeft,
  faPen,
  faTimes,
} from '@fortawesome/pro-regular-svg-icons';

import { Link } from '../../routing/Link';

const Recipe = (props) => {
  const { recipe } = usePreloadedQuery(
    graphql`
      query RecipeQuery($id: ID!) {
        recipe(id: $id) {
          name
          characteristic
          vegetarian
          cookingTime
          comment
          databaseId
          bookNumber
          pageNumber
          ingredients
          preparation
          course {
            name
          }
          season {
            name
          }
          recipePhotos {
            id
            urlLarge1x
            urlLarge2x
          }
        }
      }
    `,
    props.prepared.recipeQuery
  );

  const renderPhoto = (photo) => (
    <img
      alt="recipe"
      key={photo.id}
      className="img-fluid"
      srcSet={`${photo.urlLarge1x} 1x, ${photo.urlLarge2x} 2x`}
      src={photo.urlLarge1x}
    />
  );

  return (
    <>
      <div className="mt-5">
        <Link className="mr-5" to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> Terug
        </Link>
        <Link to={`/recepten/${recipe.databaseId}/wijzigen`}>
          <FontAwesomeIcon icon={faPen} /> Wijzigen
        </Link>
      </div>

      <h1 className="mt-2 mb-4">{recipe.name}</h1>
      <dl className="row">
        <dt className="col-3">Menugang</dt>
        <dd className="col-9">{recipe.course ? recipe.course.name : '-'}</dd>
        <dt className="col-3">Seizoen</dt>
        <dd className="col-9">{recipe.season ? recipe.season.name : '-'}</dd>
        <dt className="col-3">Extra</dt>
        <dd className="col-9">
          {recipe.characteristic ? recipe.characteristic : '-'}
        </dd>
        <dt className="col-3">Vegatarisch</dt>
        <dd className="col-9">
          <FontAwesomeIcon icon={recipe.vegetarian ? faCheck : faTimes} />
        </dd>
        <dt className="col-3">Bereidingstijd</dt>
        <dd className="col-9">{recipe.cookingTime} minuten</dd>
        <dt className="col-3">Opmerking</dt>
        <dd className="col-9 wrap">
          {recipe.comment === null || recipe.comment === ''
            ? '-'
            : recipe.comment}
        </dd>
        <dt className="col-3">Boeknummer</dt>
        <dd className="col-9">{recipe.bookNumber}</dd>
        <dt className="col-3">Bladzijde nummer </dt>
        <dd className="col-9">{recipe.pageNumber}</dd>
        <dt className="col-3">Ingrediënten</dt>
        <dd className="col-9 wrap">{recipe.ingredients}</dd>
        <dt className="col-3">Bereiding</dt>
        <dd className="col-9 wrap">{recipe.preparation}</dd>
      </dl>

      {recipe.recipePhotos.map(renderPhoto)}
    </>
  );
};

Recipe.propTypes = {
  prepared: PropTypes.shape({
    recipeQuery: PropTypes.object.isRequired,
  }).isRequired,
};

export default Recipe;
