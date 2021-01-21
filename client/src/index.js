import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import './index.scss';

import RelayEnvironment from './RelayEnvironment';
import routes from './routes';
import RoutingContext from './routing/RoutingContext';
import createRouter from './routing/createRouter';
import RouterRenderer from './routing/RouteRenderer';

import reportWebVitals from './reportWebVitals';

// Uses the custom router setup to define a router instanace that we can pass through context
const router = createRouter(routes);

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense fallback="loading...">
        <RoutingContext.Provider value={router.context}>
          <RouterRenderer />
        </RoutingContext.Provider>
      </React.Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
