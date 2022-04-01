import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import { useInjectSaga } from 'redux-injectors';
import { Helmet } from 'react-helmet';

import { APP_NAME } from '../../config';
import routesMap from './routesMap';

import saga from './saga';

import LocationChangeListen from './LocationChangeListen';

const App = () => {
  useInjectSaga({ key: 'app', saga });
  return (
    <>
      <Helmet titleTemplate={`%s - ${APP_NAME}`} defaultTitle={APP_NAME}>
        <meta name="description" content="description" />
      </Helmet>
      <Switch>
        {routesMap.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
      <LocationChangeListen />
    </>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default App;
