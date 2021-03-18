import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';

import { Link } from '../../routing/Link';
import RoutingContext from '../../routing/RoutingContext';
import RecipeForm from '../RecipeForm';

const NewRecipe = (props) => {
  const { history } = useContext(RoutingContext);
  const { courses, seasons } = usePreloadedQuery(
    graphql`
      query NewRecipeQuery {
        courses {
          databaseId
          name
        }
        seasons {
          databaseId
          name
        }
      }
    `,
    props.prepared.newRecipeQuery
  );

  const [commit, isInFlight] = useMutation(
    graphql`
      mutation NewRecipeMutation($input: CreateRecipeInput!) {
        createRecipe(input: $input) {
          recipe {
            databaseId
          }
          errors {
            field
            messages
          }
        }
      }
    `
  );

  const [errors, setErrors] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [recipe, setRecipe] = useState({
    characteristic: '',
    comment: '',
    cookingTime: 0,
    courseId: '',
    ingredients: '',
    name: '',
    preparation: '',
    recipePhotos: [],
    seasonId: '',
    vegetarian: false,
  });

  const onPhotoChange = (photo) => {
    setPhotos((photos) => photos.filter((p) => p.position !== photo.position));
    setRecipe({ ...recipe, recipePhotos: [...recipe.recipePhotos, photo] });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    commit({
      variables: { input: recipe },
      onCompleted: ({ createRecipe }) => {
        if (createRecipe.recipe !== null) {
          history.push(`/recepten/${createRecipe.recipe.databaseId}`);
        } else {
          setErrors(createRecipe.errors);
        }
      },
    });
  };

  return (
    <>
      <div className="mt-5 mb-3">
        <Link to="/recepten">
          <FontAwesomeIcon icon={faChevronLeft} /> Terug
        </Link>
      </div>
      <RecipeForm
        courses={courses}
        errors={errors}
        isInFlight={isInFlight}
        onPhotoChange={onPhotoChange}
        onSubmit={onSubmit}
        photos={photos}
        recipe={recipe}
        seasons={seasons}
        setPhotos={setPhotos}
        setRecipe={setRecipe}
      />
    </>
  );
};

NewRecipe.propTypes = {
  prepared: PropTypes.shape({
    newRecipeQuery: PropTypes.object.isRequired,
  }).isRequired,
};

export default NewRecipe;
