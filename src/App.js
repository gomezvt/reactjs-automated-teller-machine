
import React, { useState } from "react";
import { Grid2 } from '@mui/material';

import HeaderView from './components/atm-header';
import ScreenView from './components/atm-screen';

const App = () => {

  return (
    <Grid2 style={{ justifyItems: "center", backgroundColor: "#9f80ac", paddingTop: "100px" }}>
      <Grid2 style={{ justifyItems: "center" }}>
        <HeaderView />
        <ScreenView />
      </Grid2>
    </Grid2>
  );
}

export default App;
