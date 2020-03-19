import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          box-sizing: border-box;
          margin: 0px;
          font-family: chalkboard;
          height: 100vh;
          border: none;
          background-color: white;
        }
      `}
    />
  );
}

export default GlobalStyles;
