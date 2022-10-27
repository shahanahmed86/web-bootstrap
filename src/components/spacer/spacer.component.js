import PropTypes from 'prop-types';
import React from 'react';

const positions = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
const spacing = 4;

function Spacer({ increaseBy, position, children }) {
  if (children) return <div style={{ [position]: increaseBy * spacing }}>{children}</div>;
  return <div style={{ [position]: increaseBy * spacing }} />;
}

Spacer.propTypes = {
  increaseBy: PropTypes.number.isRequired,
  position: PropTypes.oneOf(positions).isRequired,
  children: PropTypes.element,
};

Spacer.defaultProps = {
  increaseBy: 4,
  position: 'margin',
};

export default Spacer;
