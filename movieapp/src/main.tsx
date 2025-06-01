import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store.ts";
import { ErrorBoundary } from "react-error-boundary";
import { enableMocking } from "./helpers/enableMocking.ts";
import { Fallback } from "./components/Fallback";

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary
            FallbackComponent={Fallback}
            onReset={() => {
              window.location.reload();
            }}
          >
            <App />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
});
