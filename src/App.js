import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import ThemeProvider from './containers/ThemeProvider/index';
import history from './utils/history';
import AppContainer from './containers/App/index';

import configureStore from './config/store';

import './config/i18n';
import './styles/styles.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider>
          <AppContainer />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
