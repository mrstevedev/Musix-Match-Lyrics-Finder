import React, {PropTypes} from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';

class Tracks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          console.log(value);
          if(track_list === undefined || track_list.length === 0){
            return <Spinner />
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{ heading }</h3>
                  <div className="row">
                    {track_list.map(item =>(
                      <Track key={item.track.track_id} track={item.track} />
                    ))}
                </div>
            </React.Fragment>
            )
          }
        }}
      </Consumer>
    );
  }
}
Tracks.propTypes = {

};

export default Tracks;
