
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import Icon from '../Icon';

const CardPoS = ({ average, height, posHeight }) => {
  if (height >= posHeight) {
    return null;
  }

  let label = 'minutes';
  let blocks = posHeight - height;
  let dur = (blocks * average) / 60.0;

  if (blocks <= 1) {
    label = 'seconds';
    dur = blocks * average;
  }
  // Convert to hours.
  else if (dur > 60 && dur < 1440) {
    label = 'hours';
    dur /= 60.0;
  }
  // Convert to days.
  else {
    label = 'days';
    dur /= 1440.0;
  }

  return (
    <div className="watch-list">
      <p className="watch-list__title">Reduced Rewards</p>
      <div className="animated fadeIn">
        <div className="watch-list__item back-green">
          <div>
            <Icon name="check-circle" className="far watch-list__item-close"  />
          </div>
          <div className="watch-list__item-text">
            <h4
              className="text-center text-white"
              style={{
                fontSize: '22px',
                height: '22px',
                lineHeight: '20px'
              }}>
              { dur.toFixed(2) } { label }
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPoS.propTypes = {
  average: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  posHeight: PropTypes.number.isRequired
};

export default CardPoS;
