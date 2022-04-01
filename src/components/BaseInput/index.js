import React from 'react';
import PropTypes from 'prop-types';

function BaseInput({ handleChange, className, typeInput }) {
  return (
    <>
      <input
        className={`${className}`}
        type={typeInput}
        onChange={handleChange}
        multiple="multiple"
      />
    </>
  );
}

BaseInput.propTypes = {
  handleChange: PropTypes.func,
  className: PropTypes.string,
  typeInput: PropTypes.oneOf(['text', 'file']),
};

export default BaseInput;
