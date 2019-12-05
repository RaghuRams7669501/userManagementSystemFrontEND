import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditIcon extends Component {
  render() {
    return (
      <svg viewBox="0 0 48 48" width="14" height="14">
        <g>
          <g transform="translate(-0.074074, 0.104763)">
            <path
              className="edit-icon-st0"
              d="M40.6,14c0.5,0.5,1.2,0.5,1.7,0c1.3-1.3,1.6-1.6,2.9-2.9c0.5-0.5,0.8-1.1,0.8-1.9
              c0-0.8-0.3-1.4-0.8-1.9c-1.1-1.1-2.3-2.3-3.4-3.4c-0.4-0.4-0.8-0.9-1.3-1.2C39.5,1.7,38,
              1.7,37,2.6c-1.3,1.3-1.7,1.7-3,3c-0.5,0.5-0.5,1.2,0,1.7C36.4,9.8,38.2,11.6,40.6,14L40.6
              ,14L40.6,14z"
            />
            <path
              className="edit-icon-st0"
              d="M3.3,45.8c3.1-1.1,6.3-2.1,9.4-3.2c0.8-0.3,1-1,0.4-1.6c-2-2.1-4.1-4.1-6.1-6.1
              c-0.6-0.6-1.3-0.5-1.6,0.4c-0.9,2.7-1.9,5.4-2.8,8.1c-0.2,0.6-0.4,1.1-0.5,1.5C2.1,45.7,
              2.6,46.1,3.3,45.8L3.3,45.8L3.3,45.8z"
            />
            <path
              className="edit-icon-st0"
              d="M17.3,38.7L38,18c0.7-0.7,0.7-1.9-0.1-2.7l-5.5-5.5c-0.8-0.8-2-0.8-2.7-0.1L9,30.5
              c-0.7,0.7-0.7,1.9,0.1,2.7l5.5,5.5C15.3,39.4,16.5,39.4,17.3,38.7L17.3,38.7L17.3,38.7z"
            />
          </g>
        </g>
      </svg>

    );
  }
}

EditIcon.propTypes = {
  iconClasses: PropTypes.string,
};

export default EditIcon;
