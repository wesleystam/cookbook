import { Suspense } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKickstarter } from '@fortawesome/free-brands-svg-icons';

import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';

import Loading from './Components/Loading';
import { NavLink } from './routing/Link';

const App = ({ children }) => {
  return (
    <>
    <Navbar bg="light" expand="md">
      <Container>
      <Navbar.Brand to="/">
        <FontAwesomeIcon icon={faKickstarter} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink className="nav-link" to="/" exact>
            Recipeten
          </NavLink>
          <NavLink className="nav-link" to="/menu">
            Menu
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </Container>
    </>
  );
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default App;
