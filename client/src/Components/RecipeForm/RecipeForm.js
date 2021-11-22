import PropTypes from 'prop-types';

import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/col';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/row';

import UploadPhoto from './UploadPhoto';
import ValidationMessages from '../ValidationMessages';

import { inGroupsOf } from '../../utils';

const RecipeForm = ({
  courses,
  errors,
  isInFlight,
  onPhotoChange,
  onSubmit,
  photos,
  recipe,
  seasons,
  setPhotos,
  setRecipe,
}) => {
  const onChange = ({ target: { name, value } }) => {
    setRecipe({ ...recipe, [name]: value });
  };

  const onDestroyPhoto = (photo) => {
    const recipePhotos = recipe.recipePhotos.map((p) =>
      p.databaseId === photo.databaseId ? { ...photo, _destroy: true } : p
    );
    setRecipe({ ...recipe, recipePhotos });
  };

  const onFileChange = ({ target: { files } }) => {
    if (files.length === 0) return;

    const photos = Array.from(files).map((file, index) => ({
      file: file,
      position: recipe.recipePhotos.length + index,
    }));

    setPhotos((p) => [...p, ...photos]);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="row">
        <Form.Label className="col-md-2 col-form-label" htmlFor="name">
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
        <Form.Label className="col-md-2 col-form-label" htmlFor="course">
          Menugang
        </Form.Label>
        <Col>
          <Form.Control
            as="select"
            id="course"
            isInvalid={errors.findIndex((e) => e.field === 'courseId') >= 0}
            name="courseId"
            onChange={onChange}
            value={recipe.courseId || ''}
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
        <Form.Label className="col-md-2 col-form-label" htmlFor="season">
          Seizoen
        </Form.Label>
        <Col>
          <Form.Control
            as="select"
            id="season"
            isInvalid={errors.findIndex((e) => e.field === 'seasonId') >= 0}
            name="seasonId"
            onChange={onChange}
            value={recipe.seasonId || ''}
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
          className="col-md-2 col-form-label"
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
        <Form.Label className="col-md-2 col-form-label" htmlFor="vegetarian">
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
        <Form.Label className="col-md-2 col-form-label" htmlFor="cookingTime">
          Bereidingstijd
        </Form.Label>
        <Col>
          <Form.Control
            id="cookingTime"
            isInvalid={errors.findIndex((e) => e.field === 'cookingTime') >= 0}
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
        <Form.Label className="col-md-2 col-form-label" htmlFor="comment">
          Opmerking
        </Form.Label>
        <Col>
          <Form.Control
            as="textarea"
            id="comment"
            isInvalid={errors.findIndex((e) => e.field === 'comment') >= 0}
            name="comment"
            onChange={onChange}
            value={recipe.comment}
          />
          <ValidationMessages errors={errors} attribute="comment" />
        </Col>
      </Form.Group>

      <Form.Group className="row">
        <Form.Label className="col-md-2 col-form-label" htmlFor="ingredients">
          Ingrediënten
        </Form.Label>
        <Col>
          <Form.Control
            as="textarea"
            id="ingredients"
            isInvalid={errors.findIndex((e) => e.field === 'ingredients') >= 0}
            name="ingredients"
            onChange={onChange}
            value={recipe.ingredients}
          />
          <ValidationMessages errors={errors} attribute="ingredients" />
        </Col>
      </Form.Group>

      <Form.Group className="row">
        <Form.Label className="col-md-2 col-form-label" htmlFor="preparation">
          Bereiding
        </Form.Label>
        <Col>
          <Form.Control
            as="textarea"
            id="preparation"
            isInvalid={errors.findIndex((e) => e.field === 'preparation') >= 0}
            name="preparation"
            onChange={onChange}
            value={recipe.preparation}
          />
          <ValidationMessages errors={errors} attribute="preparation" />
        </Col>
      </Form.Group>

      <Row className="mb-3">
        <Form.Label className="col-md-2 col-form-label" htmlFor="recipePhotos">
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
          {inGroupsOf(photos, 4).map((group, idx) => (
            <Row key={idx} className="mb-3">
              {group.map((photo) => (
                <Col key={photo.position}>
                  <UploadPhoto onChange={onPhotoChange} photo={photo} />
                </Col>
              ))}
            </Row>
          ))}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={{ offset: 2 }}>
          {inGroupsOf(recipe.recipePhotos, 4).map((group, idx) => (
            <Row key={idx} className="mb-3">
              {group.map((photo) => {
                if (photo.databaseId) {
                  return (
                    <Col key={photo.databaseId}>
                      <img
                        alt="recipe"
                        className="img-fluid"
                        src={photo.urlThumb1x}
                        srcSet={`${photo.urlThumb1x} 1x, ${photo.urlThumb2x} 2x`}
                      />
                      {!photo._destroy && (
                        <Button
                          block
                          onClick={onDestroyPhoto.bind(null, photo)}
                          variant="danger"
                        >
                          Verwijderen
                        </Button>
                      )}
                    </Col>
                  );
                } else {
                  return (
                    <Col key={photo.position}>
                      <UploadPhoto onChange={onPhotoChange} photo={photo} />
                    </Col>
                  );
                }
              })}
            </Row>
          ))}
        </Col>
      </Row>

      <Row>
        <Col className="offset-md-2">
          <Button disabled={isInFlight} type="submit">
            {recipe.databaseId
              ? isInFlight
                ? 'Bijwerken...'
                : 'Bijwerken'
              : isInFlight
              ? 'Toevoegen...'
              : 'Toevoegen'}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

RecipeForm.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      databaseId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      messages: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  isInFlight: PropTypes.bool.isRequired,
  onPhotoChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.object.isRequired,
      position: PropTypes.number.isRequired,
    })
  ).isRequired,
  recipe: PropTypes.shape({
    characteristic: PropTypes.string,
    comment: PropTypes.string,
    cookingTime: PropTypes.number,
    courseId: PropTypes.string,
    databaseId: PropTypes.number,
    ingredients: PropTypes.string,
    name: PropTypes.string,
    preparation: PropTypes.string,
    recipePhotos: PropTypes.arrayOf(
      PropTypes.shape({
        databaseId: PropTypes.number,
        position: PropTypes.number.isRequired,
        urlThumb1x: PropTypes.string,
        urlThumb2x: PropTypes.string,
      })
    ).isRequired,
    seasonId: PropTypes.string,
    vegetarian: PropTypes.bool,
  }).isRequired,
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      databaseId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPhotos: PropTypes.func.isRequired,
  setRecipe: PropTypes.func.isRequired,
};

export default RecipeForm;
