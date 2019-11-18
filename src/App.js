import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MediaQueryProvider } from "react-media-query-hoc";

import AppRoute from "./appRoute";

const defaultQueries = {
  mobile: "screen and (max-width: 623px)",
  tablet: "screen and (min-width: 624px) and (max-width: 1020px)",
  desktop: "screen and (min-width: 1021px) and (max-width: 1440px)",
  largeDesktop: "screen and (min-width: 1441px)"
};
const App = () => {
  return (
    <MediaQueryProvider queries={defaultQueries}>
      <AppRoute />
    </MediaQueryProvider>
  );
};

export default App;
