import React from 'react';
import PropTypes from 'prop-types';

import './Divider.css';

const Divider = ({ title }) => (
  <div className="divider">
    <span />
    <span className="font-bold text-2xl text-purple-primary">{title}</span>
    <span />
  </div>
);
Divider.propTypes = {
  title: PropTypes.string,
};

export default Divider;
