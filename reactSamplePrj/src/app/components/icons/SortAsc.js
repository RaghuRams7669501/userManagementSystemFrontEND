import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'app/utilities/i18n';

class SortAsc extends Component {
  render() {
    return (
      <div title={i18n.t('Sort Asc')}>
        <svg viewBox="0 0 18 15" width={this.props.width} height={this.props.height}>
        <title>{i18n.t('Sort Asc')}</title>
        <g>
          <g transform="translate(-1119.000000, -150.000000)" >
            <g transform="translate(1119.000000, 150.000000)" >
              <path d="M3.1,8.8V1.3c0-0.3,0.1-0.5,0.3-0.6c0.2-0.2,0.5-0.2,0.7,0
              C4.4,0.8,4.6,1,4.6,1.3v10v0.1c0,0,0,0,0,0c0,0,0.1-0.1,
              0.1-0.1c0.6-0.6,1.2-1.2,1.7-1.8c0.3-0.3,0.9-0.3,1.1,0.1
              c0.2,0.3,0.2,0.7-0.1,1c-0.9,0.9-1.8,1.8-2.7,2.7c-0.2,0.2-0.3,
              0.3-0.5,0.5c-0.3,0.3-0.7,0.3-1,0c-1-1.1-2.1-2.1-3.1-3.1
              C0.1,10.6,0,10.5,0,10.3C0,10,0.1,9.7,0.5,9.5c0.3-0.1,0.6-0.1,
              0.8,0.2c0.6,0.6,1.2,1.2,1.8,1.8c0,0,0.1,0.1,0.1,0.1v-0.2L3.1,8.8z"
              />
              <g transform="translate(13.375000, 7.000000) scale(1, -1)
              translate(-13.375000, -7.000000) translate(9.375000, 0.500000)"
              >
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

SortAsc.defaultProps = {
  width: '18',
  height: '18',
};

SortAsc.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default SortAsc;
