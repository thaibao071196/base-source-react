import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestGetPosts } from './actions';
import { makeSelectIsLoading } from './selectors';

function FormTest({ isLoading }) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(requestGetRepos(data.quantity));
    console.log(data.quantity);
  };

  return (
    <form className="homepage__form" onSubmit={handleSubmit(onSubmit)}>
      <input className="homepage__form-input" {...register('quantity')} />

      <button
        className="homepage__form-button"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'LẤY'}
      </button>
    </form>
  );
}

FormTest.propTypes = {
  isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
});

export default connect(mapStateToProps)(FormTest);
