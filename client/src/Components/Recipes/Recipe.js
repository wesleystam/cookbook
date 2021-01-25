import PropTypes from 'prop-types';
import { Link } from '../../routing/Link';
import Card from 'react-bootstrap/card';
import Col from 'react-bootstrap/col';

const Recipe = ({ recipe }) => {
  const photo = recipe.recipePhotos[0];

  return(
    <Col sm="3">
      <Card className="h-100">
        {photo && <img alt={recipe.name} src={photo.url} />}
        <Card.Body>
          <Link to={`/recepten/${recipe.databaseId}`}>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>Tijd: {recipe.cookingTime} minuten</Card.Text>
            <Card.Text>Gang: {recipe.course.name}</Card.Text>
          </Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Col>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    cookingTime: PropTypes.number,
    databaseId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    course: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    recipePhotos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired
  }).isRequired,
};

export default Recipe;
