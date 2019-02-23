import React from "react";

const BackArrow = ({
  style = {},
  fill = "#fff",
  width = "100%",
  className = "",
  viewBox = "0 0 244.94 90.12"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <polygon 
        fill={fill}
        points="244.94 43.69 4.56 43.69 46.13 2.12 44 0 0 44 1.06 45.06 0 46.12 44 90.13 46.13 88 4.81 46.69 244.94 46.69 244.94 43.69"/>
  </svg>
);

export default BackArrow;
