import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

import img from './assets/candito.svg'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <img src={img} alt="candito program" />
          <h1>Candito Program</h1>
        </div>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
