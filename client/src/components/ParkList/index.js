import React from 'react';
import { Link } from 'react-router-dom';

const Park = ({ _id, site_name }) => {
  return (
    <div key={_id} className="card mb-3">
      <h4 className="card-header bg-dark text-light p-2 m-0">
        <Link className="text-light" to={`/parks/${_id}`}>
          {site_name}
        </Link>
      </h4>
    </div>
  );
};

const ParkList = ({ parks, title }) => {
  if (!parks.length) return <h3>No Parks</h3>;

  const renderParks = () => {
    if (!parks) return null;
    return parks
      // .filter(park => )
      .map(park => <Park key={park._id} {...park} />);
  }

  return (
    <>
      <h3>{title}</h3>
      {renderParks()}
    </>
  );
};

export default ParkList;
