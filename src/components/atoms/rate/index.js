import React from 'react';
import RcRate from 'rc-rate';
import 'rc-rate/assets/index.css';
import './index.scss';

const Rate = ({ value = 2.5, ...rateProps }) => (
  <RcRate value={Number(value)} count={5} disabled allowHalf {...rateProps} />
);

export default Rate;
