import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
            <p className="card-text">
              <strong><i className="fas fa-play"></i>Track</strong>: {track.album_name}
            </p>
            <p className="card-text">
              <strong><i className="fas fa-compact-disc"></i>Album</strong>: {track.track_name}
            </p>
            <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
              <i className="fas fa-chevron-right"></i> View Lyrics
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Track;

Track.propTypes = {
};
