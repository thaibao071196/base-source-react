import React from 'react';
import PropTypes from 'prop-types';

function BaseModal({ children, onCloseModal, showModal }) {
  return (
    <div className="box-modal">
      <div
        className={`box-modal__overlay ${
          showModal ? 'box-modal__overlay--show' : ''
        }`}
        onClick={onCloseModal}
      />
      <div className={`box-modal__main ${showModal ? 'show-box-modal' : ''}`}>
        <div className="box-modal__main--delete" onClick={onCloseModal}>
          X
        </div>
        {children}
      </div>
    </div>
  );
}
BaseModal.propTypes = {
  children: PropTypes.element,
  onCloseModal: PropTypes.func,
  showModal: PropTypes.bool,
};
export default BaseModal;
