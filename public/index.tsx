import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from "preact-iso";
import { FunctionalComponent, render } from "preact";

import Header from "./components/Header/Header";
import MouseTrail from "./components/MouseTrail";
import { useEffect } from "preact/hooks";

const NotFound = lazy(() => import("./pages/_404"));
const Home = lazy(() => import("./pages/home/index"));

export const App: FunctionalComponent = () => {
  window.onload = () => { document.dispatchEvent(new Event("custom:loadend")) }

  useEffect(() => {
    document.dispatchEvent(new Event("custom:loadend"))
  }, [])

  return (
    <LocationProvider>
      <Header />
      <MouseTrail />

      <ErrorBoundary>
        <Router
          onLoadStart={() => document.dispatchEvent(new Event("custom:loadstart"))}
          onLoadEnd={() => document.dispatchEvent(new Event("custom:loadend"))}
        >
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
};

hydrate(<App />);

export async function prerender() {
  return await ssr(<App />);
}
