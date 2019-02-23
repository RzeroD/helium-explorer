
import blockchain from '../../../lib/blockchain';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

const CardSpecs = () => {

  return (
    <Card>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Coin type:
        </div>
        <div className="col-sm-12 col-md-9">
          PoS and Masternodes
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Block reward:
        </div>
        <div className="col-sm-12 col-md-9">
          5. Reward decreases by 0.5 annually until it reaches a tail emission of 2
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Reward structure:
        </div>
        <div className="col-sm-12 col-md-9">
          50% PoS / 50% Masternodes
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Governance subsidy:
        </div>
        <div className="col-sm-12 col-md-9">
          7.2%
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Masternode collateral:
        </div>
        <div className="col-sm-12 col-md-9">
          1000
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Block time:
        </div>
        <div className="col-sm-12 col-md-9">
          60 seconds
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          Port:
        </div>
        <div className="col-sm-12 col-md-9">
          9009
        </div>
      </div>
    </Card>
  );
};

export default CardSpecs;
