import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./helpers/store";
import { App } from "./pages/App/App";
// import { LoadingSpinner } from './frontend-library/atoms/loadingSpinner';
import { PersistGate } from 'redux-persist/integration/react';
import { loggerService } from './services/loggingService';
import { ErrorBoundary } from 'react-error-boundary';
import { FallBacktemplate } from './frontend-library/molecules/ErrorFallbackTemplate'

render(
  store ?
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorBoundary
          onError={(error, componentStack) => {
            loggerService.logger(error?.message, componentStack);
          }}
          fallbackRender={FallBacktemplate}
        >
          <App />
        </ErrorBoundary>
      </PersistGate>
    </Provider> : null,
  document.getElementById("root")
);