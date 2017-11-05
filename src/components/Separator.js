import { bool, string } from "prop-types";
import css from "styled-components";

import { breakpoint, color, setSpace } from "../utils";

const Separator = css.hr`
  border-color: ${props => (props.silent ? "transparent" : color.blackD)};
  border-width: 0 0 2px;
  clear: both;
  position: relative;
  width: 100%;
  ${breakpoint.onlyphone} {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  ${props =>
    props.ornamental
      ? `
      border-color: ${color.blackM};
      display: inline-block;
      width: 5%;
      ${breakpoint.desktop} {
        width: 2.5%;
      }
      ${props.align === "center"
        ? `display: inherit; margin-left: auto; margin-right: auto;`
        : null}
    `
      : `

  `}
  ${props =>
    props.size === "s"
      ? `
    ${setSpace("mvs")}
  `
      : ""}
  ${props =>
    props.size === "m"
      ? `
    ${setSpace("mvm")}
  `
      : ""}
  ${props =>
    props.size === "l"
      ? `
    ${setSpace("mvl")}
  `
      : ""}
  ${props =>
    props.size === "h"
      ? `
    ${setSpace("mvh")}
  `
      : ""}
`;

Separator.propTypes = {
  align: string,
  ornamental: bool,
  silent: bool,
  size: string
};

Separator.defaultProps = {
  align: "left",
  ornamental: false,
  silent: false,
  size: "m"
};

export default Separator;
