import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';

import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/col';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/row';

import RoutingContext from '../../routing/RoutingContext';
import { Link } from '../../routing/Link';
import ValidationMessages from '../ValidationMessages';
import Photo from './Photo';

import { inGroupsOf } from '../../utils';

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

  const onChange = ({ target: { name, value } }) => {
    setRecipe({ ...recipe, [name]: value });
  };

  const onFileChange = ({ target: { files } }) => {
    if (files.length === 0) return;

    const recipePhotos = Array.from(files).map((file) => ({
      file: file,
      position: recipe.recipePhotos.length,
    }));

    setRecipe({ ...recipe, recipePhotos });
  };

  const onPhotoChange = (photo) => {
    const recipePhotos = recipe.recipePhotos.map((p) =>
      p.name === photo.name ? photo : p
    );
    setRecipe({ ...recipe, recipePhotos });
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
      <Form onSubmit={onSubmit}>
        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="name">
            Naam
          </Form.Label>
          <Col>
            <Form.Control
              id="name"
              isInvalid={errors.findIndex((e) => e.field === 'name') >= 0}
              name="name"
              onChange={onChange}
              value={recipe.name}
            />
            <ValidationMessages errors={errors} attribute="name" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="course">
            Menugang
          </Form.Label>
          <Col>
            <Form.Control
              as="select"
              id="course"
              isInvalid={errors.findIndex((e) => e.field === 'courseId') >= 0}
              name="courseId"
              onChange={onChange}
              value={recipe.courseId}
            >
              <option value=""></option>
              {courses.map((c) => (
                <option key={c.databaseId} value={c.databaseId}>
                  {c.name}
                </option>
              ))}
            </Form.Control>
            <ValidationMessages errors={errors} attribute="courseId" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="season">
            Seizoen
          </Form.Label>
          <Col>
            <Form.Control
              as="select"
              id="season"
              isInvalid={errors.findIndex((e) => e.field === 'seasonId') >= 0}
              name="seasonId"
              onChange={onChange}
              value={recipe.seasonId}
            >
              <option value=""></option>
              {seasons.map((c) => (
                <option key={c.databaseId} value={c.databaseId}>
                  {c.name}
                </option>
              ))}
            </Form.Control>
            <ValidationMessages errors={errors} attribute="seasonId" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label
            className="col-sm-2 col-form-label"
            htmlFor="characteristic"
          >
            Extra
          </Form.Label>
          <Col>
            <Form.Control
              id="characteristic"
              isInvalid={
                errors.findIndex((e) => e.field === 'characteristic') >= 0
              }
              name="characteristic"
              onChange={onChange}
              value={recipe.characteristic}
            />
            <ValidationMessages errors={errors} attribute="characteristic" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="vegetarian">
            Vegatarisch
          </Form.Label>
          <Col>
            <Form.Check
              id="vegetarian"
              isInvalid={errors.findIndex((e) => e.field === 'vegetarian') >= 0}
              name="vegetarian"
              onChange={onChange}
              value={recipe.vegetarian}
            />
            <ValidationMessages errors={errors} attribute="vegetarian" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="cookingTime">
            Bereidingstijd
          </Form.Label>
          <Col>
            <Form.Control
              id="cookingTime"
              isInvalid={
                errors.findIndex((e) => e.field === 'cookingTime') >= 0
              }
              name="cookingTime"
              onChange={onChange}
              value={recipe.cookingTime}
              type="number"
            />
            <ValidationMessages errors={errors} attribute="cookingTime" />
          </Col>
          <Col>
            <span className="form-text text-muted">Minuten</span>
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="comment">
            Opmerking
          </Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              id="comment"
              isInvalid={errors.findIndex((e) => e.field === 'comment') >= 0}
              onChange={onChange}
              value={recipe.comment}
            />
            <ValidationMessages errors={errors} attribute="comment" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="ingredients">
            Ingrediënten
          </Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              id="ingredients"
              isInvalid={
                errors.findIndex((e) => e.field === 'ingredients') >= 0
              }
              name="ingredients"
              onChange={onChange}
              value={recipe.ingredients}
            />
            <ValidationMessages errors={errors} attribute="ingredients" />
          </Col>
        </Form.Group>

        <Form.Group className="row">
          <Form.Label className="col-sm-2 col-form-label" htmlFor="preparation">
            Bereiding
          </Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              id="preparation"
              isInvalid={
                errors.findIndex((e) => e.field === 'preparation') >= 0
              }
              name="preparation"
              onChange={onChange}
              value={recipe.preparation}
            />
            <ValidationMessages errors={errors} attribute="preparation" />
          </Col>
        </Form.Group>

        <Row className="mb-3">
          <Form.Label
            className="col-sm-2 col-form-label"
            htmlFor="recipePhotos"
          >
            Afbeeldingen
          </Form.Label>
          <Col>
            <Form.File
              accept="image/*"
              custom
              data-browse="Bestand kiezen"
              id="recipePhotos"
              label="Voeg afbeeldingen toe"
              multiple
              onChange={onFileChange}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={{ offset: 2 }}>
            {inGroupsOf(recipe.recipePhotos, 4).map((group, idx) => (
              <Row key={idx} className="mb-3">
                {group.map((photo) => (
                  <Col key={photo.name}>
                    <Photo onChange={onPhotoChange} photo={photo} />
                  </Col>
                ))}
              </Row>
            ))}
          </Col>
        </Row>

        <Row>
          <Col className="offset-sm-2">
            <Button disabled={isInFlight} type="submit">
              {isInFlight ? 'Toevoegen...' : 'Toevoegen'}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

NewRecipe.propTypes = {
  prepared: PropTypes.shape({
    newRecipeQuery: PropTypes.object.isRequired,
  }).isRequired,
};

export default NewRecipe;
