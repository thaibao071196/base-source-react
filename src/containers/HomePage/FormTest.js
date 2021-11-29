import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { requestGetRepos } from './actions';
import { makeSelectIsLoading } from './selectors';

function FormTest({ isLoading }) {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(requestGetRepos(data.username));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'loading...' : 'submit'}
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
