import PropTypes from 'prop-types';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

import { Link } from '../../routing/Link';
import Card from 'react-bootstrap/card';
import Col from 'react-bootstrap/col';

const query = graphql`
  fragment RecipeComponent_recipes on Recipe {
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
`;

const Recipe = (props) => {
  const data = useFragment(query, props.recipe);
  const photo = data.recipePhotos[0];

  return (
    <Col sm="6" lg="3" className="mb-4">
      <Card className="h-100">
        {photo && (
          <img
            alt={data.name}
            src={photo.urlThumb1x}
            srcSet={`${photo.urlThumb1x} 1x, ${photo.urlThumb2x} 2x`}
          />
        )}
        <Card.Body>
          <Link to={`/recepten/${data.databaseId}`}>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>Tijd: {data.cookingTime} minuten</Card.Text>
            <Card.Text>Gang: {data.course?.name || '-'}</Card.Text>
          </Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Col>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
