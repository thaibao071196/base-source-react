import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';
import FormTest from './FormTest';
import { makeSelectRepos } from './selectors';

const key = 'homePage';

function HomePage({ dispatch, repos }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // const { t } = useTranslation();

  return (
    <div>
      <p>hello world</p>
      <FormTest />
      <p>{JSON.stringify(repos)}</p>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  repos: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(HomePage);
