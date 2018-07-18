
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import Icon from '../Icon';

export default class CardPoSCalc extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  };

  handleClick = () => {
    const v = this.input.value;

    if (!!v && !isNaN(v)) {
      document.location.href = `/#/pos/${ v }`;
    }
  };

  handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      this.handleClick();
    }
  };

  render() {
    return (
      <Card title="PoS Calculator">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <input
              onClick={ this.handleClick }
              onKeyPress={ this.handleKeyPress }
              ref={ i => this.input = i }
              style={{ width: '100%' }}
              type="text" />
          </div>
          <div className="col-sm-12 col-md-4">
            <button
              onClick={ this.handleClick }
              style={{ marginTop: 9 }}>
              Estimate
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-gray">
            Submit for a recommended staking breakdown depending on amount.
          </div>
        </div>
      </Card>
    );
  };
}
