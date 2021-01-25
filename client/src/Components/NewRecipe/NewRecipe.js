import { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useMutation, usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';

import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/col';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/row';
import { Link } from '../../routing/Link';
import ValidationMessages from '../ValidationMessages';

const reducer = (state, { type, payload }) => {
  return {
    ...state,
    [payload.name]: payload.value,
  };
}

const NewRecipe = (props) => {
  const { courses, seasons } = usePreloadedQuery(
    graphql`
      query NewRecipeQuery {
        courses { databaseId name }
        seasons { databaseId name }
      }
    `,
    props.prepared.newRecipeQuery,
  );

  const [commit, isInFlight] = useMutation(
    graphql`
      mutation NewRecipeMutation($input: CreateRecipeInput!) {
        createRecipe(input: $input) {
          recipe { databaseId }
          errors { field messages }
        }
      }
    `
  )

  const [errors, setErrors] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    name: '',
  });

  const onChange = ({ target: { name, value }}) => {
    dispatch({ payload: { name, value }});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    commit({ 
      variables: { input: state },
      onCompleted: ({ createRecipe }) => {
        if (createRecipe.recipe !== null) {
          console.log('redirect me!');
        } else {
          setErrors(createRecipe.errors);
        }
      },
    });
  };

  return(
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
            <Form.Control id="name" isInvalid={errors.findIndex(e => e.field === 'name') >= 0} onChange={onChange} value={state.name} />
            <ValidationMessages errors={errors} attribute="name" />
          </Col>
        </Form.Group>
        <Row>
          <Col className="offset-sm-2">
            <Button disabled={isInFlight} type="submit">
              {isInFlight ? 'Toevoegen...' : 'Toevoegen' }
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
