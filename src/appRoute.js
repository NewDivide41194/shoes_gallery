import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import * as RoutePath from "./config/routeConfig";
import HomeContainer from "./features/home/container/homeContainer";
import ContactContainer from "./features/contact/container/contactContainer";
import NavBar from "./features/app/navBar";
import MenGallery from "./features/shop/category/men/container/menContainer";
import WomenGallery from "./features/shop/category/women/container/womenGallery";
import CollectionContainer from "./features/shop/category/parmanentCollection/container/CollectionContainer";
import ItemDetail from "./features/shop/items/components/itemDetail";
import ScrollToTop from "./assets/scrollToTop";
import SideBar from "./features/app/sideBar";
import withMedia from "react-media-query-hoc/dist/with-media";

const AppRoute = props => {
  const { media } = props;
  return (
    <Router>
      {media.mobile||media.tablet ? <SideBar />:null}
      <ScrollToTop>
        <div id="outer-container">
          <div id="page-wrap">
          <NavBar />
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route
                path={`/${RoutePath.Contact}`}
                component={ContactContainer}
              />
              <Route path={`/${RoutePath.Men}`} component={MenGallery} />
              <Route path={`/${RoutePath.Women}`} component={WomenGallery} />
              <Route
                path={`/${RoutePath.PermanentCollection}`}
                component={CollectionContainer}
              />
              <Route path={`/${RoutePath.Item}/:id`} component={ItemDetail} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default withMedia(AppRoute);
