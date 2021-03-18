import {
  useReducer,
  unstable_useDeferredValue as useDeferredValue,
} from 'react';
import PropTypes from 'prop-types';
import { usePreloadedQuery } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortAlphaUp,
  faSortAlphaDown,
} from '@fortawesome/pro-regular-svg-icons';

import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/col';
import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/Inputgroup';
import Row from 'react-bootstrap/row';

import { Link } from '../../routing/Link';
import List from './List';

const reducer = (state, { type, payload }) => {
  return {
    ...state,
    [payload.name]: payload.value,
  };
};

const Recipes = (props) => {
  const data = usePreloadedQuery(
    graphql`
      query RecipesQuery {
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
    props.prepared.recipesQuery
  );

  const [state, dispatch] = useReducer(reducer, {
    query: '',
    vegetarian: null,
    sortBy: '',
    sortDirection: 'asc',
    courseId: '',
    seasonId: '',
  });
  const deferredState = useDeferredValue(state, { timeoutMs: 2000 });

  const onChange = ({ target: { name, value } }) => {
    dispatch({ payload: { name, value } });
  };

  const onVegetarionChange = ({ target: { value } }) => {
    switch (value) {
      case 'true':
        value = true;
        break;
      case 'false':
        value = false;
        break;
      default:
        value = null;
    }
    dispatch({ payload: { name: 'vegetarian', value } });
  };

  const onToggleSortDirection = () => {
    dispatch({
      payload: {
        name: 'sortDirection',
        value: state.sortDirection === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={onSubmit} className="mt-5">
        <InputGroup className="mb-3">
          <Form.Control
            name="query"
            onChange={onChange}
            placeholder="Waar heb je trek in?"
            value={state.query}
          />
          <InputGroup.Append>
            <Link className="btn btn-info" to="/recepten/nieuw">
              Nieuw recipt
            </Link>
          </InputGroup.Append>
        </InputGroup>
        <Row className="mb-3">
          <Col>
            <Form.Control
              as="select"
              className="custom-select"
              name="courseId"
              onChange={onChange}
              value={state.courseId}
            >
              <option value="">Alle menugangen</option>
              {data.courses.map((c) => (
                <option
                  key={c.databaseId}
                  onChange={onChange}
                  value={c.databaseId}
                >
                  {c.name}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              as="select"
              className="custom-select"
              name="seasonId"
              onChange={onChange}
              value={state.seasonId}
            >
              <option value="">Alle seizoenen</option>
              {data.seasons.map((s) => (
                <option key={s.databaseId} value={s.databaseId}>
                  {s.name}
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              as="select"
              className="custom-select"
              name="vegetarian"
              onChange={onVegetarionChange}
              value={state.vegetarian || ''}
            >
              <option value="">Vegetarisch en niet vegetarisch</option>
              <option value="true">Vegetarisch</option>
              <option value="false">Niet Vegetarisch</option>
            </Form.Control>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                as="select"
                className="custom-select"
                name="sortBy"
                onChange={onChange}
                value={state.query}
              >
                <option value="id">Aangemaakt op</option>
                <option value="name">Titel</option>
              </Form.Control>
              <InputGroup.Append>
                <Button
                  variant="light"
                  onClick={onToggleSortDirection}
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={
                      state.sortDirection === 'asc'
                        ? faSortAlphaUp
                        : faSortAlphaDown
                    }
                  />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Form>
      <List filter={deferredState} />
    </>
  );
};

Recipes.propTypes = {
  prepared: PropTypes.shape({
    recipesQuery: PropTypes.object.isRequired,
  }).isRequired,
};

export default Recipes;
