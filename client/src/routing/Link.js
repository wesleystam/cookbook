import { useCallback, useContext }  from 'react';
import PropTypes from 'prop-types';
import RoutingContext from './RoutingContext';
import { matchPath } from 'react-router';

export const Link = (props) => {
  const { history } = useContext(RoutingContext);
  const onClick = useCallback(event => {
    if (props.to) {
      event.preventDefault();
      history.push(props.to);
    }
  }, [props.to, history]);

  return(
    <a href={props.to} onClick={onClick} className={props.className} {...props}>
      {props.children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const NavLink = ({ exact, ...props }) => {
  const { history } = useContext(RoutingContext);
  const isActive = matchPath(history.location.pathname, { path: props.to, exact });

  const className = isActive === null ? props.className : `${props.className} active`;
  return(<Link {...props} className={className} />);
};

NavLink.defaultProps = {
  exact: false,
};

NavLink.propTypes = {
  className: PropTypes.string,
  exact: PropTypes.bool,
  to: PropTypes.string,
};
