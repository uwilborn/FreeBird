// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_PARKS } from '../utils/queries';
// Components
import ParkList from '../components/ParkList';

const Parks = () => {
  const { loading, data } = useQuery(QUERY_PARKS);
  const parks = data?.parks || [];

  const renderParkList = () => {
    if (loading) {
      return <h2>Loading...</h2>
    } else {
      return <ParkList parks={parks} title="List of Parks" />
    }
  } 

  const renderSitename = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.site_name;
  }

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {renderSitename()}
        </div>
        <div className="col-12 col-md-8 mb-3">
          {renderParkList()}
        </div>
      </div>
    </main>
  );
};

export default Parks;
