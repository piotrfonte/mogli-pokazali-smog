import React from "react";
import Link from "gatsby-link";

import Page from "../components/Page";

import Header from "../partials/header";

const HomePage = () => (
  <Page>
    <Header />
    <Link to="/pm10/">PM10</Link> <Link to="/co/">CO</Link>
  </Page>
);

HomePage.propTypes = {};

export default HomePage;
