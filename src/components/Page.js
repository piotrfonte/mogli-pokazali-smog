import { array, object, oneOfType } from "prop-types";
import css from "styled-components";

import { setSpace } from "../utils";

const Page = css.div`
  ${setSpace("pal")};
`;

Page.propTypes = {
  children: oneOfType([array, object]).isRequired
};

Page.defaultProps = {};

export default Page;
