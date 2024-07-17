import React from 'react';

import {AppContainer} from './App.styles'
import {GlobalStyles} from "../../components/global/Global";
import {Router} from "../router/Router";

function App() {
  return (
    <>
      <GlobalStyles/>
      <AppContainer>
        <Router/>
      </AppContainer>
    </>
  );
}

export default App;
