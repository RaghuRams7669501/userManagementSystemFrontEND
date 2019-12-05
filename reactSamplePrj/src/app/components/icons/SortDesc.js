import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'app/utilities/i18n';

class SortDesc extends Component {
  render() {
    return (
      <div title={i18n.t('Sort Desc')}>
        <svg viewBox="0 0 18 15" width={this.props.width} height={this.props.height}>
        <title>{i18n.t('Sort Desc')}</title>
        <g>
        <g transform="translate(-1119.000000, -150.000000)">
          <g transform="translate(1119.000000, 150.000000)">
            <path d="M4.6,5.9l0,7.4c0,0.3-0.1,0.5-0.3,0.6c-0.2,0.2-0.5,0.2-0.7,0
              c-0.3-0.1-0.4-0.4-0.4-0.7l0-10V3.2c0,0,0,0,0,0c0,0-0.1,0.1-0.1,
              0.1C2.4,3.8,1.8,4.4,1.3,5C0.9,5.3,0.4,5.3,0.2,4.9
              c-0.2-0.3-0.2-0.7,0.1-1C1.1,3,2,2.1,2.9,1.2c0.2-0.2,0.3-0.3,
              0.5-0.5c0.3-0.3,0.7-0.3,1,0c1,1.1,2.1,2.1,3.1,3.1
              C7.6,4,7.7,4.2,7.7,4.4c0,0.3-0.1,0.6-0.5,0.8C7,5.3,6.6,5.2,6.4,
              5C5.8,4.4,5.3,3.8,4.7,3.2c0,0-0.1-0.1-0.1-0.1v0.2L4.6,5.9z"
            />
            <g transform="translate(9.375000, 0.937500)">
              <path className="ui-icon" d="M0,12h2" />
              <path className="ui-icon" d="M0,8.2h3.8" />
              <path className="ui-icon" d="M0,4.5h5.7" />
              <path className="ui-icon" d="M0,0.7h7.6" />
            </g>
          </g>
        </g>
        </g>
        </svg>
      </div>
    );
  }
}

SortDesc.defaultProps = {
  width: '18',
  height: '18',
};

SortDesc.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default SortDesc;
