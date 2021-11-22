import { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import Calendar from 'react-calendar';

import Button from 'react-bootstrap/button';
import 'react-calendar/dist/Calendar.css';

const CalendarButton = ({ recipe: { id } }) => {
  const [commit] = useMutation(
    graphql`
      mutation CalendarButtonMutation($input: UpdateRecipeInput!) {
        updateRecipe(input: $input) {
          recipe {
            menuItems {
              day
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
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen((x) => !x);

  const onChange = (day) => {
    commit({
      variables: {
        input: { id, menuItems: [{ day }] },
      },
      onCompleted: () => setIsOpen(false),
    });
  };

  return (
    <>
      {isOpen && (
        <div style={{ position: 'absolute' }}>
          <Calendar onChange={onChange} value={new Date()} />
        </div>
      )}
      <Button onClick={onClick} variant="secondary">
        Toevoegen aan menu
      </Button>
    </>
  );
};

CalendarButton.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CalendarButton;
