import React, { Component } from 'react';

class CollapseIcon extends Component {
  render() {
    return (
      <svg viewBox="0 0 45 45" width="15" height="15">
        <title>Collapse</title>
        <path
          className="collapse-cls-1"
          d="M13,43a21.41,21.41,0,0,0,11,3,21.15,21.15,0,0,0,11-3,21.92,21.92,0,0,0,8-8,21.41,
          21.41,0,0,0,3-11,21.15,21.15,0,0,0-3-11,22.71,22.71,0,0,0-8-8A20.9,20.9,0,0,0,24,2,
          20.9,20.9,0,0,0,13,5a21.92,21.92,0,0,0-8,8A20.9,20.9,0,0,0,2,24,20.9,20.9,0,0,0,5,
          35a20.51,20.51,0,0,0,8,8h0Z"
          transform="translate(-1.5 -1.5)"
        />
        <path
          className="collapse-cls-2"
          d="M14.1,21.75H33.8a2.25,2.25,0,1,1,0,4.5H14.1A2.24,2.24,0,0,1,11.8,24a2.33,2.33,0,0,1,
          2.3-2.3h0Z"
          transform="translate(-1.5 -1.5)"
        />
      </svg>
    );
  }
}

export default CollapseIcon;
