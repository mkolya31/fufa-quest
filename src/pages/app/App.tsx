import React from 'react';
import {Page} from "../../components/page/Page";

import {AppContainer} from './App.styles'
import {Global, css} from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={css`
        body {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}/>
      <AppContainer>
        <Page/>
      </AppContainer>
    </>
  );
}

export default App;
