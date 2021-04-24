import PropTypes from 'prop-types';

import PaginationComponent from 'react-bootstrap/Pagination';

const Pagination = ({ onChange, page, totalPages }) => {
  let items;

  // 1,2,3,4,5
  if (totalPages <= 5) {
    items = [...Array(totalPages)].map((_, i) => (
      <PaginationComponent.Item
        key={i}
        active={page === i + 1}
        onClick={onChange.bind(null, i + 1)}
      >
        {i + 1}
      </PaginationComponent.Item>
    ));
    // <1>,2,3,4,5 ... 10
  } else if (page < 5) {
    items = [...Array(5)].map((_, i) => (
      <PaginationComponent.Item
        key={i}
        active={page === i + 1}
        onClick={onChange.bind(null, i + 1)}
      >
        {i + 1}
      </PaginationComponent.Item>
    ));
    items = [
      ...items,
      <PaginationComponent.Ellipsis key="last-ellipsis" disabled />,
      <PaginationComponent.Item
        key="last"
        onClick={onChange.bind(null, totalPages)}
      >
        {totalPages}
      </PaginationComponent.Item>,
    ];
    // 1 ... 3,4,<5>,6,7 ... 10
    // 1 ... 3, 5, <6>,7,8, ... 10
  } else if (page > 4 && page <= totalPages - 4) {
    items = [...Array(5)].map((_, i) => (
      <PaginationComponent.Item
        key={i}
        active={page === page - 2 + i}
        onClick={onChange.bind(null, page - 2 + i)}
      >
        {page - 2 + i}
      </PaginationComponent.Item>
    ));
    items = [
      <PaginationComponent.Item key="first" onClick={onChange.bind(null, 1)}>
        1
      </PaginationComponent.Item>,
      <PaginationComponent.Ellipsis key="first-ellipsis" disabled />,
      ...items,
      <PaginationComponent.Ellipsis key="last-ellipsis" disabled />,
      <PaginationComponent.Item
        key="last"
        onClick={onChange.bind(null, totalPages)}
      >
        {totalPages}
      </PaginationComponent.Item>,
    ];
    // 1 ... 5, 6,<7>,8,9,10
    // 1 ... 6,7,8,9,<10>
  } else {
    items = [...Array(5)].map((_, i) => (
      <PaginationComponent.Item
        key={i}
        active={page === totalPages - 4 + i}
        onClick={onChange.bind(null, totalPages - 4 + i)}
      >
        {totalPages - 4 + i}
      </PaginationComponent.Item>
    ));
    items = [
      <PaginationComponent.Item key="first" onClick={onChange.bind(null, 1)}>
        1
      </PaginationComponent.Item>,
      <PaginationComponent.Ellipsis key="first-ellipsis" disabled />,
      ...items,
    ];
  }

  return (
    <PaginationComponent className="justify-content-center">
      {page > 1 && (
        <PaginationComponent.Prev onClick={onChange.bind(null, page - 1)} />
      )}
      {items}
      {page !== totalPages && (
        <PaginationComponent.Next onClick={onChange.bind(null, page + 1)} />
      )}
    </PaginationComponent>
  );
};

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
