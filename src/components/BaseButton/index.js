import React from 'react';
import PropTypes from 'prop-types';

function BaseButton({
  handleClick,
  nameButton,
  status,
  typeButton,
  className,
}) {
  return (
    <button
      className={`btn-send ${className}`}
      // eslint-disable-next-line react/button-has-type
      type={typeButton}
      onClick={handleClick}
      disable={status.toString()}
    >
      {nameButton}
    </button>
  );
}
BaseButton.defaultProps = {
  typeButton: 'button',
};

BaseButton.propTypes = {
  handleClick: PropTypes.func,
  nameButton: PropTypes.string,
  status: PropTypes.bool,
  typeButton: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};
export default BaseButton;
