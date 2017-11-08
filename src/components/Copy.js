import { array, object, oneOfType, string } from "prop-types";
import css from "styled-components";

import { breakpoint, color, styleText } from "../utils";

const Copy = css.div`
    text-align: center;
  em,
  .h1, .h2, .h3, .h4, .h6 {
    color: ${color.blackLD};
  }
  ${props =>
    props.limit
      ? `
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    ${breakpoint.desktop} {
      width: ${100 / 5 * 4}%;
      margin-left: initial;
      margin-right: initial;
      max-width: 620px;
    }
    ${breakpoint.hdesktop} {
      width: ${100 / 4 * 3}%;
    }
    `
      : null}

  .h1 {
    ${styleText.h1};
    color: ${color.blackLD};
  }
  .h2 {
    ${styleText.h2};
    color: ${color.blackLD};
  }
  .h3 {
    ${styleText.h3};
  }
  .h4 {
    ${styleText.h4};
  }
  .h5 {
    ${styleText.h5};
  }
  .h6 {
    ${styleText.h6};
  }

  .txt1, .txt2, .txt3 {
  }

  .txt1 {
    ${styleText.txt1}
    color: ${color.blackLD};
  }
  .txt2 {
    ${styleText.txt2}
  }
  .txt3 {
    ${styleText.txt3}
  }
  .txt3 {
    ${styleText.txt3}
  }
  .txt4 {
    ${styleText.txt4}
  }
  .txt4 {
    ${styleText.txt4}
  }
`;

Copy.propTypes = {
  children: oneOfType([array, object, string]).isRequired
};

Copy.defaultProps = {};

export default Copy;
