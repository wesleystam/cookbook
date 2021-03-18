import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';

import { Link } from '../../routing/Link';
import RoutingContext from '../../routing/RoutingContext';
import RecipeForm from '../RecipeForm';

const EditRecipe = (props) => {
  const { history } = useContext(RoutingContext);
  const data = usePreloadedQuery(
    graphql`
      query EditRecipeQuery($id: ID!) {
        courses {
          databaseId
          name
        }
        recipe(id: $id) {
          characteristic
          comment
          cookingTime
          courseId
          databaseId
          ingredients
          name
          preparation
          recipePhotos {
            databaseId
            position
            urlThumb1x
            urlThumb2x
          }
          seasonId
          vegetarian
        }
        seasons {
          databaseId
          name
        }
      }
    `,
    props.prepared.editRecipeQuery
  );

  const [commit, isInFlight] = useMutation(
    graphql`
      mutation EditRecipeMutation($input: UpdateRecipeInput!) {
        updateRecipe(input: $input) {
          recipe {
            databaseId
            recipePhotos {
              databaseId
              position
              urlThumb1x
              urlThumb2x
            }
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
  const [recipe, setRecipe] = useState(data.recipe);

  const onPhotoChange = (photo) => {
    commit({
      variables: {
        input: { databaseId: recipe.databaseId, recipePhotos: [photo] },
      },
      onCompleted: ({ updateRecipe }) => {
        if (updateRecipe.recipe == null) return;

        setRecipe({
          ...recipe,
          recipePhotos: updateRecipe.recipe.recipePhotos,
        });

        setPhotos((photos) =>
          photos.filter((p) => p.position !== photo.position)
        );
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const input = {
      ...recipe,
      recipePhotos: recipe.recipePhotos.map((p) => ({
        _destroy: p._destroy,
        id: p.databaseId,
        position: p.position,
      })),
    };

    commit({
      variables: { input },
      onCompleted: ({ updateRecipe }) => {
        if (updateRecipe.recipe !== null) {
          history.push(`/recepten/${updateRecipe.recipe.databaseId}`);
        } else {
          setErrors(updateRecipe.errors);
        }
      },
    });
  };

  return (
    <>
      <div className="mt-5 mb-3">
        <Link to={`/recepten/${recipe.databaseId}`}>
          <FontAwesomeIcon icon={faChevronLeft} /> Terug
        </Link>
      </div>
      <RecipeForm
        courses={data.courses}
        errors={errors}
        isInFlight={isInFlight}
        onPhotoChange={onPhotoChange}
        onSubmit={onSubmit}
        photos={photos}
        recipe={recipe}
        seasons={data.seasons}
        setPhotos={setPhotos}
        setRecipe={setRecipe}
      />
    </>
  );
};

EditRecipe.propTypes = {
  prepared: PropTypes.shape({
    editRecipeQuery: PropTypes.object.isRequired,
  }).isRequired,
};

export default EditRecipe;
