import {Global, css} from "@emotion/react";
import React from "react";


export const GlobalStyles = () => (
  <Global styles={css`
    body {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    #root {
      width: 100vw;
      height: 100vh;
    }
  `}/>
)
