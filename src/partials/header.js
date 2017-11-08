import css from "styled-components";
import Link from "gatsby-link";
import React from "react";

import { setSpace } from "../utils";

import Copy from "../components/Copy";
import Separator from "../components/Separator";

const HeaderEl = css.header`
  ${setSpace("mbh")};
`;

const Header = () => (
  <HeaderEl>
    <Copy>
      <Link to="/">
        <h1 className="h5">Mogli. Pokazali.</h1>
      </Link>
      <Separator size="s" silent />
      <Link to="/pm10/">PM10</Link> <Link to="/co/">CO</Link>{" "}
      <Link to="/pm25/">PM2.5</Link> <Link to="/so2/">SO2</Link>
    </Copy>
    <Separator size="s" silent />
  </HeaderEl>
);

Header.propTypes = {};

export default Header;
