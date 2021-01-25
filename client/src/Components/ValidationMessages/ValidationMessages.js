import PropTypes from 'prop-types';
import Form from 'react-bootstrap/form';

const ValidationMessages = ({ errors, attribute }) => {
  const error = errors.find(e => e.field === attribute);
  if (error === undefined) return null;

  return (
    <>
      {error.messages.map(err => (
        <Form.Control.Feedback key={err} type="invalid">
          {err}
        </Form.Control.Feedback>
      ))}
    </>
  );
};

ValidationMessages.propTypes = {
  attribute: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      messages: PropTypes.array,
    }),
  ).isRequired,
};

export default ValidationMessages;
