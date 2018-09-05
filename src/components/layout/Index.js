import React, {PropTypes} from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';


 const Index = (props) => {
  return (
    <div>
      <Search />
      <Tracks />
    </div>
  );
}

export default Index;
